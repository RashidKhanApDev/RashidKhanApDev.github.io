/**
 * Secure Bookmark Knocking Implementation
 * Written in TypeScript for Enterprise-grade security.
 */

const b64 = (function() {
    function generateIndexDict(a: string) {
        let result: Record<string, number> = {};
        for (let i = 0; i < a.length; i++) {
            result[a[i]] = i;
        }
        return result;
    }
    const _a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const _aRev = generateIndexDict(_a);
    _aRev["-"] = _aRev["+"];
    _aRev["_"] = _aRev["/"];
    const _enc = new TextEncoder();
    const _dec = new TextDecoder("utf-8");
    return {
        decode: function(s: string) {
            return this.binaryToAscii(this.base64ToBinary(s));
        },
        encode: function(s: string) {
            return this.binaryToBase64(this.asciiToBinary(s));
        },
        asciiToBinary: function(text: string) {
            return _enc.encode(text);
        },
        binaryToAscii: function(binary: Uint8Array) {
            return _dec.decode(binary);
        },
        binaryToBase64: function(originalBytes: Uint8Array) {
            let length = originalBytes.length;
            let added = (length % 3 == 0) ? 0 : (3 - length % 3);
            let bytes = new Uint8Array(length + added);
            bytes.set(originalBytes);
            let output = "";
            for (let i = 0; i < bytes.length; i += 3) {
                output += _a[ bytes[i] >>> 2 ];
                output += _a[ ((bytes[i] & 0x3) << 4) | (bytes[i + 1] >>> 4) ];
                output += _a[ ((bytes[i + 1] & 0xF) << 2) | (bytes[i + 2] >>> 6) ];
                output += _a[ bytes[i + 2] & 0x3F ];
            }
            if (added > 0) {
                output = output.slice(0, -added) + ("=".repeat(added));
            }
            return output;
        },
        base64ToBinary: function(s: string) {
            let bytes = [];
            if (s.length % 4 == 1) {
                throw "Invalid base64 input";
            } else if (s.length % 4 != 0) {
                s += "=".repeat(4 - (s.length % 4));
            }
            for (let i = 0; i <= (s.length - 4); i += 4) {
                for (let j = 0; j < 4; j++) {
                    if (s[i + j] != "=" && !(s[i + j] in _aRev)) {
                        throw "Invalid base64 input";
                    } else if (s[i + j] == "=" && Math.abs(s.length - (i + j)) > 2) {
                        throw "Invalid base64 input";
                    }
                }
                bytes.push((_aRev[s[i]] << 2) | (_aRev[s[i + 1]] >>> 4));
                if (s[i + 2] != "=") {
                    bytes.push(((_aRev[s[i + 1]] & 0xF) << 4) | (_aRev[s[i + 2]] >>> 2));
                }
                if (s[i + 3] != "=") {
                    bytes.push(((_aRev[s[i + 2]] & 0x3) << 6) | _aRev[s[i + 3]]);
                }
            }
            return new Uint8Array(bytes);
        }
    }
})();

const CryptoAPI = {
    salt: Uint8Array.from([236, 231, 167, 249, 207, 95, 201, 235, 164, 98, 246, 26, 176, 174, 72, 249]),
    iv: Uint8Array.from([255, 237, 148, 105, 6, 255, 123, 202, 115, 130, 16, 116]),
    
    randomSalt: async function() {
        return window.crypto.getRandomValues(new Uint8Array(16));
    },
    randomIv: async function() {
        return window.crypto.getRandomValues(new Uint8Array(12));
    },
    deriveKey: async function(password: string, salt: Uint8Array | null = null) {
        let rawKey = await window.crypto.subtle.importKey(
            "raw",
            b64.asciiToBinary(password),
            { name: "PBKDF2" },
            false,
            [ "deriveBits", "deriveKey" ]
        );
        return await window.crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: salt == null ? this.salt : salt,
                iterations: 100000,
                hash: "SHA-256"
            },
            rawKey,
            {
                name: "AES-GCM",
                length: 256
            },
            true,
            [ "encrypt", "decrypt" ]
        );
    },
    encrypt: async function(text: string, password: string, salt: Uint8Array | null = null, iv: Uint8Array | null = null) {
        let key = await this.deriveKey(password, salt);
        let encryptedBinary = await window.crypto.subtle.encrypt(
            {
                name: "AES-GCM",
                iv: iv == null ? this.iv : iv
            },
            key,
            b64.asciiToBinary(text)
        );
        return new Uint8Array(encryptedBinary);
    }
};

// Character pool for generating the knock sequence passphrase
const _s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function getRandomKnockPart(len: number) {
    let result = "";
    for (let i = 0; i < len; i++) {
        result += _s[Math.floor(Math.random() * _s.length)];
    }
    return result;
}

// Payload template that gets injected into each bookmark
const BOOKMARKLET_TEMPLATE = `javascript:(async () => {
    var b64 = ${b64.toString()}();
    var api = {
        salt: Uint8Array.from([236, 231, 167, 249, 207, 95, 201, 235, 164, 98, 246, 26, 176, 174, 72, 249]),
        iv: Uint8Array.from([255, 237, 148, 105, 6, 255, 123, 202, 115, 130, 16, 116]),
        deriveKey: async function(password, salt) {
            let rawKey = await window.crypto.subtle.importKey("raw", b64.asciiToBinary(password), { name: "PBKDF2" }, false, [ "deriveBits", "deriveKey" ]);
            return await window.crypto.subtle.deriveKey({ name: "PBKDF2", salt: salt, iterations: 100000, hash: "SHA-256" }, rawKey, { name: "AES-GCM", length: 256 }, true, [ "encrypt", "decrypt" ]);
        },
        decrypt: async function(text, password, salt, iv) {
            let key = await this.deriveKey(password, salt);
            let decryptedBinary = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, key, new Uint8Array(text));
            return b64.binaryToAscii(decryptedBinary);
        }
    };
    let redirect = "REPLACE_REDIRECT";
    const hash = window.location.hash.slice(1);
    try {
        const decoded = b64.decode(hash);
        const params = JSON.parse(decoded);
        let salt = b64.base64ToBinary(params.s);
        let iv = b64.base64ToBinary(params.i);
        let encrypted = b64.base64ToBinary(params.e);
        let passphrase = params.p + "REPLACE_KNOCK_PART";
        let decrypted = null;
        try {
            decrypted = await api.decrypt(encrypted, passphrase, salt, iv);
        } catch {
            params.p = passphrase;
            window.location.replace(redirect + "#" + b64.encode(JSON.stringify(params)));
            return;
        }
        window.location.href = decrypted;
    } catch {
        window.location.replace(redirect);
    }
})();`;

// Expose functionality to the DOM
export function initBookmarkKnocking() {
    const btnAddStep = document.getElementById("btnAddStep");
    const btnRandom = document.getElementById("btnRandom");
    const btnGenerate = document.getElementById("btnGenerate");
    const bookmarksContainer = document.getElementById("bookmarksContainer");
    const outputArea = document.getElementById("outputArea");

    if (!btnAddStep || !bookmarksContainer || !btnGenerate) return;

    btnAddStep.addEventListener('click', () => {
        const div = document.createElement('div');
        div.className = 'input-group fade-in';
        div.innerHTML = `
            <label>Knock sequence step</label>
            <input type="url" class="bookmark-input modern-input" placeholder="e.g. https://en.wikipedia.org/wiki/Main_Page" />
            <button class="btn-icon remove-step" aria-label="Remove Step"><i class="fas fa-trash"></i></button>
        `;
        
        div.querySelector('.remove-step')?.addEventListener('click', () => {
            div.remove();
        });
        bookmarksContainer.appendChild(div);
    });

    btnRandom?.addEventListener('click', () => {
        const defaultPages = [
            "https://en.wikipedia.org/wiki/Main_Page",
            "https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",
            "https://en.wikipedia.org/wiki/Web_browser",
            "https://en.wikipedia.org/wiki/Internet",
            "https://en.wikipedia.org/wiki/Computer_security"
        ];
        document.querySelectorAll('.bookmark-input').forEach((input: any) => {
            input.value = defaultPages[Math.floor(Math.random() * defaultPages.length)];
        });
    });

    btnGenerate.addEventListener('click', async () => {
        const hiddenUrlInput = document.getElementById("hiddenUrl") as HTMLInputElement;
        const alertBox = document.getElementById("alertBox");
        const generatedBox = document.getElementById("generatedBox");
        
        if (!hiddenUrlInput || !alertBox || !generatedBox || !outputArea) return;

        let hiddenUrl = hiddenUrlInput.value.trim();
        let knockUrls = Array.from(document.querySelectorAll('.bookmark-input'))
                             .map((el: any) => el.value.trim())
                             .filter(val => val !== "");

        if (!hiddenUrl) {
            alertBox.innerHTML = '<div class="alert-error"><i class="fas fa-exclamation-triangle"></i> Please provide a URL to hide.</div>';
            return;
        }

        if (knockUrls.length === 0) {
            alertBox.innerHTML = '<div class="alert-error"><i class="fas fa-exclamation-triangle"></i> Please add at least one knock sequence step.</div>';
            return;
        }

        try {
            new URL(hiddenUrl);
            knockUrls.forEach(url => new URL(url));
        } catch {
            alertBox.innerHTML = '<div class="alert-error"><i class="fas fa-exclamation-triangle"></i> Invalid URL detected. Make sure all inputs start with http:// or https://</div>';
            return;
        }

        alertBox.innerHTML = ''; // Clear previous errors
        outputArea.style.opacity = '1';

        // Cryptography Generation
        let passphrase = "";
        let knockParts = [];
        for (let i = 0; i < knockUrls.length; i++) {
            let part = getRandomKnockPart(4);
            knockParts.push(part);
            passphrase += part;
        }

        let salt = await CryptoAPI.randomSalt();
        let iv = await CryptoAPI.randomIv();
        let encrypted = await CryptoAPI.encrypt(hiddenUrl, passphrase, salt, iv);

        let params = {
            v: "0.0.1",
            e: b64.binaryToBase64(encrypted),
            s: b64.binaryToBase64(salt),
            i: b64.binaryToBase64(iv),
            p: ""
        };

        // First link needs the initial payload hash
        let initialHash = encodeURIComponent(b64.encode(JSON.stringify(params)));
        
        generatedBox.innerHTML = '';
        
        // Generate the drag-and-drop bookmarklets
        for (let i = 0; i < knockUrls.length; i++) {
            let script = BOOKMARKLET_TEMPLATE
                .replace("REPLACE_REDIRECT", knockUrls[i])
                .replace("REPLACE_KNOCK_PART", knockParts[i]);

            // Clean up template formatting to make it a single valid javascript URL
            script = script.replace(/\s+/g, ' ').trim();
            
            let anchor = document.createElement('a');
            anchor.className = 'btn-premium-link fade-in tilt-card';
            anchor.onclick = (e) => e.preventDefault();
            anchor.href = i === 0 ? knockUrls[0] + "#" + initialHash : script;
            
            if (i === 0) {
                // The first link is just the URL + hash payload, not a bookmarklet script
                // because clicking the script directly won't start the chain properly if it requires the hash
                anchor.innerHTML = `<i class="fas fa-key"></i> Step 1 (Drag Me)`;
            } else {
                anchor.innerHTML = `<i class="fas fa-lock"></i> Step ${i + 1} (Drag Me)`;
            }
            
            generatedBox.appendChild(anchor);
        }
        
        alertBox.innerHTML = '<div class="alert-success"><i class="fas fa-check-circle"></i> Successfully generated secure bookmarks! Drag them to your bookmark bar in order.</div>';
    });
}

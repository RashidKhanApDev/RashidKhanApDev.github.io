/**
 * sounds.js — Premium Web Audio API Sound Effects
 * 
 * Provides two globally accessible functions:
 *   • window.playClickSound()  – Satisfying UI click/pop for buttons
 *   • window.playTypeSound()   – Natural keyboard tap with subtle randomization
 *
 * No external dependencies. Works in all modern browsers.
 * AudioContext is created lazily on first user interaction.
 */
(function () {
  'use strict';

  // ── Shared AudioContext (lazy singleton) ──────────────────────────────
  let audioCtx = null;

  /**
   * Returns the shared AudioContext, creating it on first call.
   * Handles the browser autoplay-policy by resuming a suspended context.
   * Returns null if the Web Audio API is unavailable.
   */
  function getAudioContext() {
    if (audioCtx) {
      // Resume if the browser suspended it (autoplay policy)
      if (audioCtx.state === 'suspended') {
        audioCtx.resume().catch(function () { /* silently ignore */ });
      }
      return audioCtx;
    }

    try {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return null;

      audioCtx = new AudioContextClass();

      // Attempt to resume immediately (some browsers start suspended)
      if (audioCtx.state === 'suspended') {
        audioCtx.resume().catch(function () { /* silently ignore */ });
      }

      return audioCtx;
    } catch (e) {
      console.warn('[sounds.js] Web Audio API is not available:', e);
      return null;
    }
  }

  // ── playClickSound ────────────────────────────────────────────────────
  /**
   * Premium UI click / pop sound.
   *
   * Design notes:
   *   • Sine wave at ~800 Hz gives a warm, round "pop"
   *   • A second, quieter harmonic at ~1600 Hz adds a subtle sparkle
   *   • Very short duration (≈55 ms) keeps it snappy
   *   • Low-pass filter at 2 kHz removes harshness, adds warmth
   *   • Quick gain envelope: 5 ms attack → 50 ms exponential release
   *   • Master volume kept low (0.15) so it feels subtle, never jarring
   */
  function playClickSound() {
    if (document.hidden) return;
    var ctx = getAudioContext();
    if (!ctx) return;

    var now = ctx.currentTime;

    // ── Filter for warmth ──
    var filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2000;
    filter.Q.value = 1.0;
    filter.connect(ctx.destination);
    if (globalAnalyser) filter.connect(globalAnalyser);

    // ── Master gain envelope ──
    var masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(0.15, now + 0.005);   // 5 ms attack
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055); // 50 ms release
    masterGain.connect(filter);

    // ── Primary oscillator (800 Hz sine — the body of the pop) ──
    var osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(800, now);
    // Subtle downward pitch sweep adds a satisfying "thud" tail
    osc1.frequency.exponentialRampToValueAtTime(500, now + 0.055);

    var gain1 = ctx.createGain();
    gain1.gain.value = 1.0;
    osc1.connect(gain1);
    gain1.connect(masterGain);

    // ── Harmonic oscillator (1600 Hz sine — sparkle layer) ──
    var osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1600, now);
    osc2.frequency.exponentialRampToValueAtTime(1000, now + 0.04);

    var gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.3, now); // quieter than fundamental
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
    osc2.connect(gain2);
    gain2.connect(masterGain);

    // ── Start & stop ──
    osc1.start(now);
    osc1.stop(now + 0.06);
    osc2.start(now);
    osc2.stop(now + 0.06);

    // Cleanup: disconnect nodes after sound finishes
    osc1.onended = function () {
      osc1.disconnect();
      gain1.disconnect();
      osc2.disconnect();
      gain2.disconnect();
      masterGain.disconnect();
      filter.disconnect();
    };
  }

  // ── playTypeSound ─────────────────────────────────────────────────────
  /**
   * Premium keyboard tap sound (like an iPhone keyboard click).
   *
   * Design notes:
   *   • Base frequency ~1200 Hz (crisp, bright tap)
   *   • Randomised pitch ±100 Hz on each call for natural variation
   *   • Randomised volume ±10 % so repeated taps don't sound robotic
   *   • Ultra-short duration (≈35 ms) — just a quick tick
   *   • Triangle wave for a softer timbre than pure sine
   *   • High-pass filter at 600 Hz removes any low-end muddiness
   *   • Very fast attack (2 ms) + exponential decay
   */
  function playTypeSound() {
    if (document.hidden) return;
    var ctx = getAudioContext();
    if (!ctx) return;

    var now = ctx.currentTime;

    // ── Randomisation ──
    var pitchOffset  = (Math.random() - 0.5) * 200;  // ±100 Hz
    var volumeScale  = 0.9 + Math.random() * 0.2;     // 0.9 – 1.1 (±10 %)
    var baseVolume   = 0.12 * volumeScale;             // keep it subtle

    // ── High-pass filter to keep it crisp ──
    var hpFilter = ctx.createBiquadFilter();
    hpFilter.type = 'highpass';
    hpFilter.frequency.value = 600;
    hpFilter.Q.value = 0.7;
    hpFilter.connect(ctx.destination);
    if (globalAnalyser) hpFilter.connect(globalAnalyser);

    // ── Gain envelope ──
    var gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(baseVolume, now + 0.002);   // 2 ms attack
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);  // 33 ms decay
    gain.connect(hpFilter);

    // ── Primary oscillator ──
    var osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200 + pitchOffset, now);
    // Tiny downward sweep adds a realistic "tap" feel
    osc.frequency.exponentialRampToValueAtTime(800 + pitchOffset * 0.5, now + 0.035);
    osc.connect(gain);

    // ── Transient click layer (noise-like burst for realism) ──
    var clickOsc = ctx.createOscillator();
    clickOsc.type = 'square';
    clickOsc.frequency.setValueAtTime(4000 + pitchOffset * 2, now);

    var clickGain = ctx.createGain();
    clickGain.gain.setValueAtTime(0.03 * volumeScale, now); // very quiet
    clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.008); // 8 ms burst
    clickOsc.connect(clickGain);
    clickGain.connect(hpFilter);

    // ── Start & stop ──
    osc.start(now);
    osc.stop(now + 0.04);
    clickOsc.start(now);
    clickOsc.stop(now + 0.04);

    // Cleanup
    osc.onended = function () {
      osc.disconnect();
      gain.disconnect();
      clickOsc.disconnect();
      clickGain.disconnect();
      hpFilter.disconnect();
    };
  }

  // ── playBootSound ─────────────────────────────────────────────────────
  /**
   * Premium Boot / Initialization Sound.
   *
   * Design notes:
   *   • Rising sine sweep for "booting" effect
   *   • Random high-frequency data "ticks"
   *   • Final chord for success/completion
   */
  function playBootSound() {
    if (document.hidden) return;
    var ctx = getAudioContext();
    if (!ctx) return;

    var now = ctx.currentTime;
    var masterGain = ctx.createGain();
    masterGain.gain.value = 0.2;
    masterGain.connect(ctx.destination);
    if (globalAnalyser) masterGain.connect(globalAnalyser);

    // 1. Rising Sweep
    var sweepOsc = ctx.createOscillator();
    var sweepGain = ctx.createGain();
    sweepOsc.type = 'sine';
    sweepOsc.frequency.setValueAtTime(200, now);
    sweepOsc.frequency.exponentialRampToValueAtTime(800, now + 1.5);
    
    sweepGain.gain.setValueAtTime(0, now);
    sweepGain.gain.linearRampToValueAtTime(0.05, now + 0.2);
    sweepGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
    
    sweepOsc.connect(sweepGain);
    sweepGain.connect(masterGain);
    sweepOsc.start(now);
    sweepOsc.stop(now + 1.5);

    // 2. Data processing ticks
    for (let i = 0; i < 15; i++) {
      var timeOffset = now + Math.random() * 1.5;
      var tickOsc = ctx.createOscillator();
      var tickGain = ctx.createGain();
      tickOsc.type = 'square';
      tickOsc.frequency.value = 2000 + Math.random() * 3000;
      
      tickGain.gain.setValueAtTime(0, timeOffset);
      tickGain.gain.linearRampToValueAtTime(0.01, timeOffset + 0.001);
      tickGain.gain.exponentialRampToValueAtTime(0.001, timeOffset + 0.03);
      
      tickOsc.connect(tickGain);
      tickGain.connect(masterGain);
      tickOsc.start(timeOffset);
      tickOsc.stop(timeOffset + 0.04);
    }

    // 3. Completion Chord
    var dingTime = now + 1.8;
    var chordFreqs = [523.25, 659.25, 783.99, 1046.50];

    chordFreqs.forEach((freq, index) => {
      var dingOsc = ctx.createOscillator();
      var dingGain = ctx.createGain();
      dingOsc.type = 'sine';
      dingOsc.frequency.value = freq;
      
      var stagger = dingTime + (index * 0.05);
      
      dingGain.gain.setValueAtTime(0, stagger);
      dingGain.gain.linearRampToValueAtTime(0.04, stagger + 0.02);
      dingGain.gain.exponentialRampToValueAtTime(0.001, stagger + 1.5);
      
      dingOsc.connect(dingGain);
      dingGain.connect(masterGain);
      dingOsc.start(stagger);
      dingOsc.stop(stagger + 1.5);
    });
  }

  // ── Aggressive Audio Unlock ───────────────────────────────────────────
  window.initAudioContext = function() {
    var ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(function() {});
    }
    // Play a silent oscillator burst to definitively "unlock" iOS Safari
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.001);
  };
  
  // ── Global Audio Analyser ─────────────────────────────────────────────
  var globalAnalyser = null;
  function getAnalyser() {
    var ctx = getAudioContext();
    if (!ctx) return null;
    if (!globalAnalyser) {
        globalAnalyser = ctx.createAnalyser();
        globalAnalyser.fftSize = 256;
        // Do not connect analyser to destination directly, it intercepts nodes
    }
    return globalAnalyser;
  }

  // ── playPianoSound ─────────────────────────────────────────────────────
  /**
   * Premium Piano Sound for Navigation Links
   *
   * Design notes:
   *   • Uses multiple oscillators (sine for fundamental, triangle for harmonics)
   *   • Very fast attack (0.01s) and long exponential decay (1s) to mimic a piano string
   *   • Lowpass filter removes harsh high frequencies for a warm tone
   */
  function playPianoSound(frequency) {
    if (document.hidden) return;
    var ctx = getAudioContext();
    if (!ctx) return;
    
    // Default to C5 if no frequency provided
    var freq = frequency || 523.25;

    var now = ctx.currentTime;
    
    var masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(0.3, now + 0.01);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    
    var filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 3000;
    masterGain.connect(filter);
    filter.connect(ctx.destination);
    if (globalAnalyser) filter.connect(globalAnalyser);

    // Fundamental (Sine)
    var osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.value = freq;
    var gain1 = ctx.createGain();
    gain1.gain.value = 1.0;
    osc1.connect(gain1);
    gain1.connect(masterGain);

    // First Harmonic (Triangle)
    var osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.value = freq * 2;
    var gain2 = ctx.createGain();
    gain2.gain.value = 0.3;
    osc2.connect(gain2);
    gain2.connect(masterGain);
    
    // Second Harmonic (Sine)
    var osc3 = ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.value = freq * 3;
    var gain3 = ctx.createGain();
    gain3.gain.value = 0.1;
    osc3.connect(gain3);
    gain3.connect(masterGain);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    
    osc1.stop(now + 1.3);
    osc2.stop(now + 1.3);
    osc3.stop(now + 1.3);
  }

  // ── Expose globally ───────────────────────────────────────────────────
  window.playClickSound = playClickSound;
  window.playTypeSound  = playTypeSound;
  window.playBootSound  = playBootSound;
  window.playPianoSound = playPianoSound;
  window.getAudioAnalyser = getAnalyser;

})();

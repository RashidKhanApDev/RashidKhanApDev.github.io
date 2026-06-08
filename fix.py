import re

with open('src/style.scss', 'r') as f:
    content = f.read()

# 1. Remove .card from cursor
content = re.sub(r'#custom-cursor\s*\{[^}]*\.card\s*\{.*?\n\}\s*}?', '', content, flags=re.DOTALL)

# 2. Add correct cursor back
cursor_css = """#custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: $cursor-size;
  height: $cursor-size;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.4);
  backdrop-filter: blur(2px);
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;
  mix-blend-mode: screen;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6);

  &.hovering {
    width: $cursor-hover-size;
    height: $cursor-hover-size;
    background: rgba(139, 92, 246, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
}
"""
content += "\n" + cursor_css

# 3. Add Apple level card
card_css = """
.card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 2rem;
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.5s;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border-radius: 20px;
        padding: 2px;
        background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        opacity: 0.5;
        transition: opacity 0.5s;
    }

    &:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 255, 65, 0.1);
        border-color: rgba(0, 255, 65, 0.3);

        &::before {
            opacity: 1;
        }

        h3 {
            color: $accent-color;
        }
    }
}
"""
content += "\n" + card_css

with open('src/style.scss', 'w') as f:
    f.write(content)

interface Window {
  playTypeSound?: () => void;
  playClickSound?: () => void;
  playBootSound?: () => void;
  initAudioContext?: () => void;
  webkitAudioContext: typeof AudioContext;
  polyglotExecutors?: Record<string, () => string>;
  handleTerminalDart?: () => string;
}

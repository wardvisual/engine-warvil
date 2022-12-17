export interface Event {
  target: {
    value: string;
  };
  preventDefault: () => void;
}

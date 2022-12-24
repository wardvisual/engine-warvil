export interface Event {
  path?: any;
  target: {
    value: string;
  };
  preventDefault: () => void;
}

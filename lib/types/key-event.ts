export interface OnInputNewLineable {
    shiftKey: boolean;
    key: string;
    target: { value: string; };
    preventDefault: () => void;
}
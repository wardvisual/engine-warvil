import { OnInputNewLineable } from "lib/types/key-event";

export function onInputNewLine(event: OnInputNewLineable) {
    if(event.shiftKey && event.key === "Enter") {
        event.preventDefault();

        event.target.value += "\n";
    } 
}
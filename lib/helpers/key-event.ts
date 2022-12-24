export function onInputNewLine(event: any) {
  if (event.shiftKey && event.key === 'Enter') {
    event.preventDefault();
    event.target.value += '\n';
  }
}

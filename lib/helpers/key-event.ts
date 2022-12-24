export const onInputNewLine = async (event: any, callback: any) => {
  const keyCode = event.which || event.keyCode;

  if (keyCode === 13 && !event.shiftKey) {
    event.preventDefault();

    await callback(event);
  }
};

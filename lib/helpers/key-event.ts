export const onInputNewLine = async (event: any, callback: any) => {
  const keyCode = event.which || event.keyCode;
  const regex = /^$/;

  if (regex.test(event.target.value) && keyCode === 13 && !event.shiftKey) {
    event.preventDefault();

    await callback(event);
  }
};

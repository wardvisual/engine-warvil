export async function postInstructionRequest(store: any) {
  try {
    const response = await fetch('api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userRequest: [
          ...store.appRequests.map(
            (request: { message: string }) => request.message
          ),
          store.userInputRequest,
        ],
        command: store.command,
      }),
    });

    return await response.json();
  } catch (err) {
    return err;
  }
}

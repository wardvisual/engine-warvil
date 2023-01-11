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

    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

export async function testChatGPT(store: any) {
  try {
    const response = await fetch('api/openai/chatgpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userRequest: store.userInputRequest,
      }),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
}

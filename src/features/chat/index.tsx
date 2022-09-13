import { NextPage } from "next";
import { useState } from "react";

const Chat: NextPage = (props) => {
  const [userRequest, setUserRequest] = useState("");

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await fetch("api/ai-bot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userRequest: userRequest.trim() }),
    });

    console.log({ response });
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Enter your question"
          name="userRequest"
          onChange={(event) => setUserRequest(event.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
      <h1>Welcome to AIBot</h1>
      <button type="submit">Request</button>
    </main>
  );
};

export default Chat;

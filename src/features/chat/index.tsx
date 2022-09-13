import { NextPage } from "next";
import { useState } from "react";

const Chat: NextPage = (props) => {
  const [userRequest, setUserRequest] = useState("what is javascript?");

  const getData = async () => {
    const response = await fetch("/api/ai-bot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userRequest }),
    });

    console.log({ response });
  };

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="Enter your question"
          name="userRequest"
          onChange={(event) => setUserRequest(event.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
      <h1>Welcome to AIBot</h1>
      <button onClick={getData}>Request</button>
    </main>
  );
};

export default Chat;

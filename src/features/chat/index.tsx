import { NextPage } from 'next';
import { useState } from 'react';

import Style from './style';
import Header from 'src/features/chat/components/header/index';
import Footer from 'src/components/footer';

const Chat: NextPage = (props) => {
  const [userRequest, setUserRequest] = useState('');
  const [botResponse, setBotResponse] = useState(
    "Hey there! It's nice to meet you here. You can ask me anything about JavaScript."
  );

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await fetch('api/ai-bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userRequest: userRequest.trim() }),
    });

    const result = await response.json();

    setUserRequest('');
    setBotResponse(result?.response);
  };

  return (
    <Style.Wrapper>
      <Style.SubWrapper>
        <Header />
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Enter your question"
            name="userRequest"
            onChange={(event) => setUserRequest(event.target.value)}
            value={userRequest}
          />

          {botResponse && (
            <div>
              <p>
                <strong>Warvil Bot: </strong> {botResponse}
              </p>
            </div>
          )}

          <button type="submit">Ask</button>
        </form>
      </Style.SubWrapper>
      <Footer />
    </Style.Wrapper>
  );
};

export default Chat;

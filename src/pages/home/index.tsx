/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

import { Layout } from '../../../styles/global.style';
import MessageBox from '../../components/message-box/index';

import { IMessageBox } from 'src/types/message';
import Wrapper from '../../../styles/home.style';

const Home: NextPage = (props) => {
  const [appRequests, setAppRequests] = useState<IMessageBox[]>([]);
  const messagesContainerRef = useRef(null);

  const [userInput, setUserInput] = useState('');
  const [command, setCommand] = useState('');

  const getUserInput = (event: any) => {
    setUserInput(event.target.value);
  };

  const submitRequest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newUserRequestPrompt = [
      ...appRequests,
      { isFromUser: true, message: userInput },
    ];

    setAppRequests(newUserRequestPrompt);

    try {
      const response = await fetch('api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userRequest: userInput, command }),
      });

      setUserInput('');

      const result = await response.json();

      if (result) {
        setAppRequests([
          ...newUserRequestPrompt,
          { isFromUser: false, message: result.response },
        ]);
      } else {
        setAppRequests([
          ...newUserRequestPrompt,
          {
            isFromUser: false,
            message: 'Error: No response from OpenAI API',
          },
        ]);
      }
    } catch (error: any) {
      setAppRequests([
        ...newUserRequestPrompt,
        {
          isFromUser: false,
          message: `Error: ${error?.message}`,
        },
      ]);
    }
  };

  useEffect(() => {
    console.log({ appRequests });
  }, [appRequests]);

  useEffect(() => {
    if (messagesContainerRef && messagesContainerRef.current) {
      const container: any = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [appRequests]);

  return (
    <Layout>
      <Wrapper.Home>
        <Wrapper.Header>
          <div>
            <h1>Engine Warvil</h1>
            <p>Your OpenAI Assistant | Edward Fernandez</p>
          </div>
        </Wrapper.Header>
        <Wrapper.Container>
          <Wrapper.Commands>
            <div>
              <h2>Choose Commands</h2>
            </div>
            <ul>
              <li>
                <i className="fas fa-question-circle"></i> Basic question
              </li>
              <li>
                <i className="fas fa-code"></i> Generate code
              </li>
              <li>
                <i className="fas fa-check"></i> Grammar correction
              </li>
              <li>
                <i className="fas fa-quote-right"></i>
                Paraphrase
              </li>
              <li>
                <i className="fas fa-book-reader"></i> Summarize for a grade
                student
              </li>
              <li>
                <i className="fas fa-globe"></i> English to other language
              </li>
              <li>
                <i className="fas fa-file-code"></i> Explain programming code
              </li>
              <li>
                <i className="fas fa-balance-scale"></i> Evaluate a mathematical
                expression
              </li>
              <li>
                <i className="fas fa-calculator"></i> Evaluate a math equation
              </li>
              <li>
                <i className="fas fa-book-open"></i> Create study notes
              </li>
            </ul>
          </Wrapper.Commands>
          <Wrapper.Playground>
            <Wrapper.Header>
              <div className="message-box">
                <h2>Basic Question</h2>
                <p>Answers at your fingertips</p>
              </div>
            </Wrapper.Header>
            <Wrapper.EngineArea>
              <Wrapper.MessageBoxContainer ref={messagesContainerRef}>
                {appRequests.map((el, i) => (
                  <MessageBox
                    key={i}
                    isFromUser={el.isFromUser}
                    message={el.message}
                  />
                ))}
              </Wrapper.MessageBoxContainer>
            </Wrapper.EngineArea>

            <Wrapper.UserArea onSubmit={submitRequest}>
              <div>
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  name="userRequest"
                  onChange={getUserInput}
                  value={userInput}
                  required
                />
                <button type="submit">
                  <i className="fas fa-paper-plane"> </i>
                </button>
              </div>
            </Wrapper.UserArea>
          </Wrapper.Playground>
        </Wrapper.Container>
      </Wrapper.Home>
    </Layout>
  );
};

export default Home;

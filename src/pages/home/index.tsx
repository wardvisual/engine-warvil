/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { createBreakpoint } from 'react-use';

import { Layout } from 'styles/global.style';
import MessageBox from 'src/components/message-box/index';

import Wrapper from 'styles/home.style';
import { MessageBoxable } from 'lib/types/message';
import CommandBox from 'src/components/command-box';
import Playground from 'src/components/playground';
import { commands } from 'lib/constants/commands';

const useBreakpoint = createBreakpoint({ XL: 1280, L: 992, S: 350 });

const Home: NextPage = (props) => {
  const [appRequests, setAppRequests] = useState<MessageBoxable[]>([]);
  const messageBoxContainerRef = useRef(null);
  const commandBoxRef = useRef<HTMLInputElement>(null);
  const popupRef = useRef<HTMLInputElement>(null);
  const inputBoxRef = useRef<HTMLInputElement>(null);

  const [userInput, setUserInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [command, setCommand] = useState<string>(commands.GENERATE_CODE);

  const breakpoint = useBreakpoint();

  const getUserInput = (event: unknown) => {
    setUserInput(event.target.value);
  };

  const submitRequest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newUserRequestPrompt = [
      ...appRequests,
      { isFromUser: true, message: userInput },
    ];

    setUserInput('');
    setLoading(true);

    try {
      setAppRequests(newUserRequestPrompt);

      const response = await fetch('api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userRequest: [
            ...appRequests.map((request) => request.message),
            userInput,
          ],
          command,
        }),
      });

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

      console.log({ result });
    } catch (error: any) {
      setAppRequests([
        ...newUserRequestPrompt,
        {
          isFromUser: false,
          message: `${error?.message}`,
        },
      ]);
      console.log({ error });
    }

    setLoading(false);
  };

  useEffect(() => {
    if (messageBoxContainerRef && messageBoxContainerRef.current) {
      const container: unknown = messageBoxContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [appRequests]);

  useEffect(() => {
    if (inputBoxRef.current) {
      inputBoxRef.current.focus();
    }
    console.log({ breakpoint });
  }, [appRequests]);

  return (
    <>
      <div className="overlay" ref={popupRef}></div>
      <Layout>
        <Wrapper.Home>
          <Wrapper.Header>
            <div>
              <h1>Engine Warvil</h1>
              <p>Your OpenAI Assistant | Edward Fernandez</p>
            </div>
          </Wrapper.Header>
          <Wrapper.Container>
            <CommandBox ref={commandBoxRef} breakpoint={breakpoint} />
            <Playground
              appRequests={appRequests}
              getUserInput={getUserInput}
              inputBoxRef={inputBoxRef}
              loading={loading}
              messageBoxContainerRef={messageBoxContainerRef}
              submitRequest={submitRequest}
              userInput={userInput}
            />
          </Wrapper.Container>
        </Wrapper.Home>
      </Layout>
    </>
  );
};

export default Home;

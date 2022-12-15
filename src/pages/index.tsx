/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { createBreakpoint } from 'react-use';

import { Layout } from 'styles/global.style';

import Wrapper from 'styles/home.style';
import CommandBox from 'src/components/command-box';
import Playground from 'src/components/playground';
import { commands } from 'lib/constants/commands';
import { useStore } from 'lib/hooks/store';
import { Event } from 'lib/types/tags';
import { MessageBoxable } from 'lib/types/message';

const useBreakpoint = createBreakpoint({ XL: 1280, L: 992, S: 350 });

const Home: NextPage = () => {
  const messageBoxContainerRef = useRef(null);
  const commandBoxRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLInputElement>(null);

  const breakpoint = useBreakpoint();
  const store = useStore((state: any) => state);

  const getUserInput = (event: Event) => {
    store.setUserInputRequest(event.target.value);
    if (store.setUserInputRequest)
      store.setUserInputRequest(event.target.value);
  };

  const submitRequest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newUserRequestPrompt = [
      ...store.appRequests,
      { isFromUser: true, message: store.userInputRequest },
    ];

    store.setUserInputRequest('');
    store.setIsLoading(true);

    try {
      store.setAppRequests(newUserRequestPrompt);

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

      const result = await response.json();

      if (result) {
        store.setAppRequests([
          ...newUserRequestPrompt,
          { isFromUser: false, message: result.response },
        ]);
      } else {
        store.setAppRequests([
          ...newUserRequestPrompt,
          {
            isFromUser: false,
            message: 'Error: No response from OpenAI API',
          },
        ]);
      }

      console.log({ result });
    } catch (error: any) {
      store.setAppRequests([
        ...newUserRequestPrompt,
        {
          isFromUser: false,
          message: `${error?.message}`,
        },
      ]);
      console.log({ error });
    }

    store.setIsLoading(false);
  };

  useEffect(() => {
    if (messageBoxContainerRef && messageBoxContainerRef.current) {
      const container: HTMLDivElement = messageBoxContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [store.appRequests]);

  useEffect(() => {
    if (inputBoxRef.current) {
      inputBoxRef.current.focus();
    }
  }, [store.appRequests]);

  return (
    <>
      <div className="overlay" ref={popupRef}></div>
      <Layout>
        <Wrapper.Home>
          <Wrapper.Header>
            <div>
              <h1>Engine Warvil</h1>
              <p>
                {' '}
                Your OpenAI Assistant.
                <br /> 👨‍💻 Developed by &nbsp;
                <a
                  href="https://wardvisual.me/"
                  title="wardvisual"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.wardvisual.com
                </a>
              </p>
            </div>
          </Wrapper.Header>
          <Wrapper.Container>
            <CommandBox ref={commandBoxRef} breakpoint={breakpoint} />
            <Playground
              appRequests={store.appRequests}
              getUserInput={getUserInput}
              inputBoxRef={inputBoxRef}
              loading={store.isLoading}
              messageBoxContainerRef={messageBoxContainerRef}
              submitRequest={submitRequest}
              userInput={store.userInputRequest}
            />
          </Wrapper.Container>
        </Wrapper.Home>
      </Layout>
    </>
  );
};

export default Home;

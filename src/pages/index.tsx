/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { createBreakpoint } from 'react-use';

import { Layout } from 'styles/global.style';

import Wrapper from 'styles/home.style';
import CommandBox from 'src/components/command-box';
import Playground from 'src/components/playground';
import { Event } from 'lib/types/tags';
import { MessageBoxable } from 'lib/types/message';
import { commands } from '../../lib/constants/commands';
import { postInstructionRequest } from 'lib/helpers/api';
import Image from 'next/image';

const useBreakpoint = createBreakpoint({ L: 993, S: 992 });

const Home: NextPage = () => {
  /* Reference Variables */
  const messageBoxContainerRef = useRef(null);
  const commandBoxRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLInputElement>(null);

  /* Hooks */
  const breakpoint = useBreakpoint();

  /* States*/
  const [userInputRequest, setUserInputRequest] = useState<string>('');
  const [appRequests, setAppRequests] = useState<MessageBoxable[]>([]);
  const [command, setCommand] = useState<string>(commands.GENERATE_CODE);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /* Functions */
  const getUserInput = (event: Event) => {
    setUserInputRequest(event.target.value);
  };

  useEffect(() => {
    console.log({ appRequests });
  }, [appRequests]);

  const submitRequest = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);
    setUserInputRequest('');

    const newUserRequestPrompt = [
      ...appRequests,
      { isFromUser: true, message: userInputRequest },
    ];

    try {
      setAppRequests(newUserRequestPrompt);

      const result = await postInstructionRequest({
        command,
        userInputRequest,
        appRequests,
      });

      if (result) {
        setAppRequests([
          ...newUserRequestPrompt,
          { isFromUser: false, message: result.message },
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
        ...appRequests,
        {
          isFromUser: false,
          message: error.message,
        },
      ]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (messageBoxContainerRef && messageBoxContainerRef.current) {
      const container: HTMLDivElement = messageBoxContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [appRequests]);

  useEffect(() => {
    if (inputBoxRef.current) {
      inputBoxRef.current.focus();
    }
  }, [appRequests]);

  return (
    <>
      <div className="overlay" ref={popupRef}></div>
      <Layout>
        <Wrapper.Home>
          <Wrapper.Header>
            <div>
              {/* <h1>Engine Warvil</h1> */}
              <Image
                src="/assets/logo.svg"
                objectFit="contain"
                alt="engine warvil"
                width={200}
                height={100}
              />
              <p>
                👨‍💻 Developed by &nbsp;
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
              appRequests={appRequests}
              userInput={userInputRequest}
              getUserInput={getUserInput}
              inputBoxRef={inputBoxRef}
              loading={isLoading}
              messageBoxContainerRef={messageBoxContainerRef}
              submitRequest={submitRequest}
            />
          </Wrapper.Container>
        </Wrapper.Home>
      </Layout>
    </>
  );
};

export default Home;

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
import Navbar from 'src/components/navbar';
import Preloader from 'src/components/preloader';
import Disclaimer from 'src/components/disclaimer';

const useBreakpoint = createBreakpoint({ L: 993, S: 992 });

const Home: NextPage = () => {
  /* Reference Variables */
  const messageBoxContainerRef = useRef(null);
  const commandBoxRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /* Hooks */
  const breakpoint = useBreakpoint();

  /* States*/
  const [userInputRequest, setUserInputRequest] = useState<string>('');
  const [appRequests, setAppRequests] = useState<MessageBoxable[]>([]);
  const [command, setCommand] = useState<string>(commands.GENERATE_CODE);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialCodeInstruction, setInitialCodeInstruction] =
    useState<boolean>(true);

  /* Functions */
  const getUserInput = (event: string | Event) => {
    if (typeof event === 'string') {
      setUserInputRequest(event);
    } else {
      setUserInputRequest(event.target.value);
    }
  };

  const cleanUpConvo = () => {
    setUserInputRequest('');
    setAppRequests([]);
    setInitialCodeInstruction(true);
  };

  useEffect(() => {
    console.log({ appRequests });
  }, [appRequests]);

  const submitRequest = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);
    setInitialCodeInstruction(false);
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
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
      <Preloader loading={loading} />
      <Layout className={loading ? '' : 'display'}>
        <Wrapper.Home>
          <Navbar />
          <Wrapper.Container>
            <CommandBox ref={commandBoxRef} breakpoint={breakpoint} />
            <Playground
              appRequests={appRequests}
              userInput={userInputRequest}
              getUserInput={getUserInput}
              inputBoxRef={inputBoxRef}
              cleanUpConvo={cleanUpConvo}
              initialCodeInstruction={initialCodeInstruction}
              loading={isLoading}
              messageBoxContainerRef={messageBoxContainerRef}
              submitRequest={submitRequest}
            />
          </Wrapper.Container>
        </Wrapper.Home>
        <Disclaimer />
      </Layout>
    </>
  );
};

export default Home;

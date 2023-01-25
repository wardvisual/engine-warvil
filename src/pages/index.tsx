/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { createBreakpoint } from 'react-use';

import { HomeOverlay, Layout } from 'styles/global.style';

import Wrapper from 'styles/home.style';
import CommandBox from 'src/components/command-box';
import Playground from 'src/components/playground';
import { Event } from 'lib/types/tags';
import { MessageBoxable } from 'lib/types/message';
import { commands } from 'lib/constants/constant.command';
import { postInstructionRequest, testChatGPT } from 'lib/helpers/api';
import Navbar from 'src/components/navbar';
import Preloader from 'src/components/preloader';
import Disclaimer from 'src/components/disclaimer';

const useBreakpoint = createBreakpoint({ L: 993, S: 992 });

const PlaygroundView: NextPage = () => {
  /* Reference Variables */
  const messageBoxContainerRef = useRef(null);
  const commandBoxRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLInputElement>(null);

  /* Hooks */
  const breakpoint = useBreakpoint();

  /* States*/
  const [loading, setLoading] = useState<boolean>(true);
  const [userApiKey, setUserApiKey] = useState<string>('');
  const [userInputRequest, setUserInputRequest] = useState<string>('');
  const [appRequests, setAppRequests] = useState<MessageBoxable[]>([]);
  const [command, setCommand] = useState<string>(
    commands.GENERATE_THESIS_TITLE
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialCodeInstruction, setInitialCodeInstruction] =
    useState<boolean>(true);

  /* Functions */
  const getUserInput = (event: string | Event) => {
    if (typeof event === 'string') setUserInputRequest(event);
    else setUserInputRequest(event.target.value);
  };

  const handleCommandChange = (index: number, isDisabled: boolean) => {
    if (!isDisabled) {
      cleanUpConvo();
      setCommand(Object.keys(commands)[index]);
    }
  };

  const cleanUpConvo = () => {
    setUserInputRequest('');
    setAppRequests([]);
    setInitialCodeInstruction(true);
  };

  const submitRequest = async (event: any) => {
    event.preventDefault();

    getUserInput(event);

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
        console.log({ result: result.message });
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
        <HomeOverlay />
        <Wrapper.Home>
          <Navbar />
          <Wrapper.Container>
            <CommandBox
              ref={commandBoxRef}
              breakpoint={breakpoint}
              command={command}
              handleCommandChange={handleCommandChange}
            />
            <Playground
              appRequests={appRequests}
              command={command}
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

export default PlaygroundView;

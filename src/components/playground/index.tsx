import React from 'react';
import { NextPage } from 'next';

import Wrapper from './style';
import { Playgroundable } from 'lib/types/props';
import MessageBox from '../message-box';
import { useState } from 'react';

const Playground: NextPage<Playgroundable> = (
  prop: Playgroundable
): JSX.Element => {
  const [templateInstructions] = useState<string[]>([
    'Code a calculator in Java',
    'Code a simple HTML and CSS webpage',
    'Code a regex finding the vulnerable input',
    'Code a Chatbot in C#',
  ]);

  const getTemplateInstruction = (index: number) => {
    // prop.userInput(templateInstructions[index]);
  };

  return (
    <Wrapper.Playground>
      <Wrapper.Header>
        <div className="message-box">
          <h2>Generate Code</h2>
          <p>Say goodbye to tedious coding tasks</p>
        </div>
      </Wrapper.Header>
      <Wrapper.EngineArea>
        {/* {store.initialCodeInstruction && (
          <ul className="pre-code">
            {templateInstructions.map((el, index) => (
              <li key={index} onClick={() => getTemplateInstruction(index)}>
                {el}
              </li>
            ))}
          </ul>
        )} */}
        <Wrapper.MessageBoxContainer ref={prop.messageBoxContainerRef}>
          {prop.appRequests.map((el, i) => (
            <MessageBox
              key={i}
              isFromUser={el.isFromUser}
              message={el.message}
            />
          ))}
          {prop.loading && (
            <div className="loading">
              <p>🤖 Warvil</p>
              <div>
                <p>Typing...</p>
              </div>
            </div>
          )}
        </Wrapper.MessageBoxContainer>
      </Wrapper.EngineArea>

      <Wrapper.UserArea onSubmit={prop.submitRequest}>
        <div>
          <input
            type="text"
            placeholder="What's on your mind?"
            name="userRequest"
            // onChange={(event) => setUserInputRequest(event.target.value)}
            onChange={prop.getUserInput}
            value={prop.userInput}
            required
            autoFocus={true}
            disabled={prop.loading}
            ref={prop.inputBoxRef}
          />
          <button type="submit" disabled={prop.loading}>
            <i className="fas fa-paper-plane"> </i>
          </button>
        </div>
      </Wrapper.UserArea>
    </Wrapper.Playground>
  );
};

export default Playground;

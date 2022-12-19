import React from 'react';
import { NextPage } from 'next';

import Wrapper from './style';
import { Playgroundable } from 'lib/types/props';
import MessageBox from '../message-box';
import { useState } from 'react';

const Playground: NextPage<Playgroundable> = (
  prop: Playgroundable
): JSX.Element => {
  const [templateInstructions] = useState([
    {
      name: 'Code a calculator in Java',
      icon: 'calculator',
    },
    {
      name: 'Code a simple HTML and CSS webpage',
      icon: 'globe',
    },
    {
      name: 'Code a regex finding the vulnerable input',
      icon: 'search',
    },
    {
      name: 'Code a Chatbot in C#',
      icon: 'comment',
    },
  ]);

  const getTemplateInstruction = (index: number) => {
    prop.getUserInput(templateInstructions[index].name);
  };

  return (
    <Wrapper.Playground>
      {prop.initialCodeInstruction && (
        <Wrapper.PreCode>
          <i className="fas fa-lightbulb"></i>
          <p>Try these examples</p>
          <ul>
            {templateInstructions.map((el, index) => (
              <li key={index} onClick={() => getTemplateInstruction(index)}>
                <i className={`fas fa-${el.icon}`}></i>
                <span>{el.name}</span>
              </li>
            ))}
          </ul>
        </Wrapper.PreCode>
      )}
      <Wrapper.Header>
        <div className="message-box">
          <h2>Generate Code</h2>
          <p>Say goodbye to tedious coding tasks</p>
        </div>
      </Wrapper.Header>
      <Wrapper.EngineArea>
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

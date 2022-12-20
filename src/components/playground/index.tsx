import React from 'react';
import { NextPage } from 'next';

import Wrapper from './style';
import { Playgroundable } from 'lib/types/props';
import MessageBox from '../message-box';
import { useState, useEffect } from 'react';
import Typing from '../typing';

const Playground: NextPage<Playgroundable> = (
  prop: Playgroundable
): JSX.Element => {
  const [templateInstructions] = useState([
    {
      name: 'Create a hello world program in Assembly language',
      icon: 'microchip',
    },
    {
      name: 'How do I make an HTTP request in Javascript?',
      icon: 'hand-paper',
    },
    {
      name: 'Create a function in Javascript utilizing regex to find XSS attacks',
      icon: 'search',
    },
    {
      name: 'How to configure CORS in Laravel',
      icon: 'robot',
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
        <div>
          <h2>Generate Code</h2>
          <p>Say goodbye to tedious coding tasks</p>
        </div>
        <div>
          <button
            type="button"
            title="Delete Conversation"
            onClick={prop.cleanUpConvo}
          >
            <i className="fas fa-trash-alt"> </i>
          </button>
          <button type="button" title="Settings">
            <i className="fas fa-cog"> </i>
          </button>
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
              <Typing />
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
          <div>
            <button type="submit" disabled={prop.loading} title="Send">
              <i className="fas fa-paper-plane"> </i>
            </button>
            <button
              type="button"
              disabled={prop.loading}
              title="Start Recording"
            >
              <i className="fas fa-microphone"> </i>
            </button>
          </div>
        </div>
      </Wrapper.UserArea>
    </Wrapper.Playground>
  );
};

export default Playground;

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { NextPage } from 'next';

import Wrapper from './style';
import { Playgroundable } from 'lib/types/props';
import MessageBox from '../message-box';
import Typing from '../typing';
import { content } from 'lib/data/data.content';
import { onInputNewLine } from '../../../lib/helpers/key-event';
import TextArea from '../textarea';

const Playground: NextPage<Playgroundable> = (
  prop: Playgroundable
): JSX.Element => {
  const getTemplateInstruction = (index: number) => {
    prop.getUserInput(
      content[prop.command]['templateInstructions'][index].name
    );
  };

  return (
    <Wrapper.Playground>
      {prop.initialCodeInstruction && (
        <Wrapper.PreCode>
          <i className="fas fa-lightbulb"></i>
          <p>Try these examples</p>
          <ul>
            {content[prop.command]['templateInstructions'].map((el, index) => (
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
          <h2>{content[prop.command]['title']}</h2>
          <p>{content[prop.command]['subtitle']}</p>
        </div>
        <div>
          <button
            type="button"
            title="Delete Conversation"
            onClick={prop.cleanUpConvo}
            disabled={prop.loading}
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
          <div>
            <TextArea
              value={prop.userInput}
              onChange={prop.getUserInput}
              placeholder="What's on your mind?"
              name="userRequest"
              required={true}
              autoFocus={true}
              disabled={prop.loading}
              ref={prop.inputBoxRef}
              onSubmit={prop.submitRequest}
            />
          </div>
          {/* <textarea
            placeholder="What's on your mind?"
            name="userRequest"
            onChange={prop.getUserInput}
            value={prop.userInput}
            required
            autoFocus={true}
            disabled={prop.loading}
            ref={prop.inputBoxRef}
            onKeyDown={(event) => onInputNewLine(event, prop.submitRequest)}
          ></textarea> */}

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

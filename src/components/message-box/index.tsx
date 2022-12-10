/* eslint-disable react/no-unescaped-entities */

import { NextPage } from 'next';

import Wrapper from './style';
import { MessageBoxable } from 'lib/types/message';
import React from 'react';

const MessageBox: NextPage<MessageBoxable> = ({
  isFromUser,
  message = ``,
}: MessageBoxable): JSX.Element => {
  let html,
    isCode = false;
  const codeRegex = /[{}[\]()<>\-*/%&|^\_\\]/;

  if (!isFromUser && message.indexOf('\n') !== -1) {
    const formattedMessage = message.replace(/^ \n\n/, ' ');
    const lines = formattedMessage.split('\n');

    if (codeRegex.test(message)) {
      isCode = true;
      html = lines.map((line) => `${line} <br/>`);
    } else {
      html = lines.map((line) => `${line}`);
    }

    html = html.join('');
  }

  return (
    <Wrapper.MessageBox>
      <div className={isFromUser ? 'user' : 'engine'}>
        <p>{isFromUser ? '👤 You' : '🤖 Warvil'}</p>
        <div>
          {isFromUser ? (
            <p>{message}</p>
          ) : (
            <>
              {isCode ? (
                <pre
                  dangerouslySetInnerHTML={{ __html: html || message }}
                ></pre>
              ) : (
                <p>{message}</p>
              )}
            </>
          )}
        </div>
      </div>
    </Wrapper.MessageBox>
  );
};

export default MessageBox;

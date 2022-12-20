/* eslint-disable react/no-unescaped-entities */

import { NextPage } from 'next';

import Wrapper from './style';
import { MessageBoxable } from 'lib/types/message';
import React from 'react';
import { useEffect } from 'react';

const MessageBox: NextPage<MessageBoxable> = ({
  isFromUser,
  message = ``,
}: MessageBoxable): JSX.Element => {
  let html;

  const codeRegex = /[{}[\]()<>\-*/%&|^\_\\]|<pre[^>]*>.*?<\/pre>/g;

  if (!isFromUser && message.indexOf('\n') !== -1) {
    const formattedMessage = message.replace(/^  \n\n/, ' ');
    const lines = formattedMessage.split('\n');

    if (codeRegex.test(message)) {
      html = lines.map((line) => `${line} <br/>`);
    } else {
      html = lines.map((line) => `${line}`);
    }

    html = html.join('');
  }

  useEffect(() => {
    console.log({ message });
  }, [message]);
  return (
    <Wrapper.MessageBox>
      <div className={isFromUser ? 'user' : 'engine'}>
        <p>{isFromUser ? '👤 You' : '🤖 Warvil'}</p>
        <div>
          {isFromUser ? (
            <p>{message}</p>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: html || message }}></div>
          )}
        </div>
      </div>
    </Wrapper.MessageBox>
  );
};

export default MessageBox;

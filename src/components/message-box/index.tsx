/* eslint-disable react/no-unescaped-entities */

import { NextPage } from 'next';

import Wrapper from './style';
import { MessageBoxable } from 'lib/types/message';

const MessageBox: NextPage<MessageBoxable> = ({
  isFromUser,
  message,
}: MessageBoxable): JSX.Element => {
  return (
    <Wrapper.MessageBox>
      <div className={isFromUser ? 'user' : 'engine'}>
        <p>{isFromUser ? '👤 You' : '🤖 Warvil'}</p>
        <div>
          <p>{message}</p>
        </div>
      </div>
    </Wrapper.MessageBox>
  );
};

export default MessageBox;

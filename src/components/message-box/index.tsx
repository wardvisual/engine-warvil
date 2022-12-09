/* eslint-disable react/no-unescaped-entities */

import { NextPage } from 'next';
import { IMessageBoxProps } from 'src/types/message';

import Wrapper from './style';

const MessageBox: NextPage<IMessageBoxProps> = ({
  isFromUser,
  message,
}: IMessageBoxProps): JSX.Element => {
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

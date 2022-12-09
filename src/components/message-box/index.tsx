/* eslint-disable react/no-unescaped-entities */

import { NextPage } from 'next';

import Wrapper from './style';

interface IMessageBox {
  isFromUser: boolean;
  message: string;
}

const MessageBox: NextPage<IMessageBox> = ({
  isFromUser,
  message,
}: IMessageBox): JSX.Element => {
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

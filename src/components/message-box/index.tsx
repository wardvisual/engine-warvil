/* eslint-disable react/no-unescaped-entities */

import { NextPage } from 'next';

import Wrapper from './style';

interface IMessageBox {
  isFromUser?: boolean;
}

const MessageBox: NextPage<IMessageBox> = ({
  isFromUser,
}: IMessageBox): JSX.Element => {
  return (
    <Wrapper.MessageBox>
      <div className={isFromUser ? 'user' : 'engine'}>
        <p>{isFromUser ? '👤 You' : '🤖 Warvil'}</p>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </Wrapper.MessageBox>
  );
};

export default MessageBox;

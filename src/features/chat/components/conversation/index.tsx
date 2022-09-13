import { NextPage } from 'next';
import { useState } from 'react';

import Style from './style';

interface Conversationable {
  guestName: string;
  conversation: string[];
}

const Conversation: NextPage<Conversationable> = (props: Conversationable) => {
  return <Style.Wrapper></Style.Wrapper>;
};

export default Conversation;

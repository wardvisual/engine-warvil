import { NextPage } from 'next';
import { useState } from 'react';

import Style from './style';

const Header: NextPage = (props) => {
  return (
    <Style.Wrapper>
      <h2>Welcome, Guest!</h2>
      <hr />
      <p>
        <strong>Warvil</strong> is an AI bot that seeks to respond to your
        queries about programming.
      </p>
    </Style.Wrapper>
  );
};

export default Header;

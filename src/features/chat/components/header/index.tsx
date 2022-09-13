import { NextPage } from 'next';
import { useState } from 'react';

import Style from './style';

const Header: NextPage = (props) => {
  return (
    <Style.Wrapper>
      <h2>Welcome, Guest!</h2>
      <hr />
      <p>
        <strong>Warvil</strong> is an AI Bot that aims to answer your Javascript
        questions
      </p>
    </Style.Wrapper>
  );
};

export default Header;

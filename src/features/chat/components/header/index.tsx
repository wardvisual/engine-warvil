import { NextPage } from 'next';
import { useState } from 'react';

import Style from './style';

const Header: NextPage = (props) => {
  return (
    <Style.Wrapper>
      <h3>Welcome, Guest!</h3>
      <p>Here's WaviL-AIBot to help you!</p>
    </Style.Wrapper>
  );
};

export default Header;

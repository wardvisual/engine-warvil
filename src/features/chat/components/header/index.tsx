import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

import warvilProfile from 'public/assets/warvil-profile.svg';

import Style from './style';

const Header: NextPage = (props) => {
  return (
    <Style.Wrapper>
      <Image src={warvilProfile} alt="Warvil" />

      <div>
        <h2>Welcome, Guest!</h2>
        <hr />
        <p>
          <strong>Warvil</strong> is an AI bot that seeks to respond to your
          queries about programming.
        </p>
      </div>
    </Style.Wrapper>
  );
};

export default Header;

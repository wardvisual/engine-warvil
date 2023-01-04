import React from 'react';
import Wrapper from './style';
import Image from 'next/image';

const Navbar = () => {
  return (
    <Wrapper.Navbar>
      <div>
        <Image
          src="/assets/logo.svg"
          objectFit="contain"
          alt="engine warvil"
          width={200}
          height={100}
        />
        <p>
          👨‍💻 Brought to you by&nbsp;
          <a
            href="https://wardvisual.me/"
            title="wardvisual"
            target="_blank"
            rel="noreferrer"
          >
            www.wardvisual.com
          </a>
        </p>
        <p>
          ⭐ Might useful?&nbsp;
          <a
            href="https://github.com/wardvisual/engine-warvil/"
            title="Engine Warvil"
            target="_blank"
            rel="noreferrer"
          >
            Give it a star
          </a>
        </p>
      </div>
    </Wrapper.Navbar>
  );
};

export default Navbar;

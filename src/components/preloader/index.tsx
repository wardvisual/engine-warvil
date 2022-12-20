import React from 'react';

import Wrapper from './style';
import Image from 'next/image';
import Typing from '../typing';

const Preloader = ({ loading }: { loading: boolean }) => {
  return (
    <Wrapper.Preloader className={loading ? '' : 'hidden'}>
      <div>
        <Image
          src="/assets/logo.svg"
          objectFit="contain"
          alt="engine warvil"
          width={400}
          height={220}
        />
        <Typing />
      </div>
    </Wrapper.Preloader>
  );
};

export default Preloader;

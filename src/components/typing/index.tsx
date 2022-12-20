import React from 'react';
import Wrapper from './style';

const Typing = () => {
  return (
    <Wrapper.Typing>
      <div className="typing-animation">
        <span className="bouncing-ball"></span>
        <span className="bouncing-ball"></span>
        <span className="bouncing-ball"></span>
      </div>
    </Wrapper.Typing>
  );
};

export default Typing;

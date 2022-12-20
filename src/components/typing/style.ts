import styled from 'styled-components';

const Wrapper = {
  Typing: styled.div`
    .typing-animation {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
    }

    .bouncing-ball {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--color-blue-400);
      animation: bouncing-ball 1s infinite;
    }

    .bouncing-ball + .bouncing-ball {
      margin-left: 5px;
      animation-delay: 0.5s;
    }

    .bouncing-ball + .bouncing-ball + .bouncing-ball {
      animation-delay: 1s;
    }

    @keyframes bouncing-ball {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `,
};

export default Wrapper;

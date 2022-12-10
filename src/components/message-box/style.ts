import styled, { keyframes } from 'styled-components';

const Wrapper = {
  MessageBox: styled.div`
    @keyframes typing {
      from {
        transform: translateY(20%);
        opacity: 0;
      }
      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }

    animation: typing 0.3s linear;

    > div.user {
      text-align: end;
      > div {
        display: flex;
        justify-content: flex-end;

        p {
          background: var(--color-blue-400);
          color: var(--color-black-400);
        }
      }
    }

    > div {
      padding: 1em;
      > p {
        color: var(--color-white-200);
        font-weight: 600;
        padding-left: 0.2em;
      }
      > div {
        p,
        pre {
          margin-top: 0.5em;
          background: var(--color-black-400);
          padding: 1em;
          color: var(--color-white-300);
          max-width: max-content;
          width: inherit;
          border-radius: var(--radius-10);
        }

        pre {
          white-space: pre-wrap;
        }
      }
    }
  `,
};

export default Wrapper;

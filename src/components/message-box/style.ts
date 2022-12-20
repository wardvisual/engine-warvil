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
          text-align: start;
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
        > div {
          margin-top: 0.5em;
          background: var(--color-black-400);
          padding: 1em;
          border-radius: var(--radius-10);
          max-width: max-content;
        }

        p {
          border-radius: var(--radius-10);
          margin-top: 0.5em;
        }

        p,
        li,
        pre {
          color: var(--color-white-300);
          max-width: max-content;
          width: inherit;
          padding: 1em;
        }

        pre {
          /* margin: 0.4em 0 0.4em 0; */
          /* padding: 0.5em; */
          border-radius: var(--radius-10);
          white-space: pre-wrap;
          background: #1d202c;

          code {
            /* color: var(--color-blue-400); */
          }
        }
      }
    }
  `,
};

export default Wrapper;

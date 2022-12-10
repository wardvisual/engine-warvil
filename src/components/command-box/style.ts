import styled from 'styled-components';

const Wrapper = {
  Commands: styled.div`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: var(--color-black-300);
    border: none;
    border-radius: var(--radius-15);
    font-size: 1rem;
    padding: 1em;
    outline: none;
    user-select: none;
    min-width: max-content;

    div {
      padding: 1em;
    }

    ul.mobile {
      z-index: 9;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    ul.desktop {
      all: unset;
    }

    ul {
      li {
        padding: 1em;
        background-color: var(--color-black-300);
        border: none;
        transition: all 0.3s ease-in-out;
        min-width: max-content;

        &:nth-child(2) {
          color: var(--color-blue-400);
          background-color: var(--color-black-400);

          > * {
            color: var(--color-blue-400);
          }
        }

        &:hover {
          background-color: var(--color-black-400);
          cursor: pointer;
          animation: flying-animation 0.3s ease;
          color: var(--color-blue-400);

          > * {
            color: var(--color-blue-400);
          }
        }

        &:active {
          transform: scale(0.95);
        }

        @keyframes flying-animation {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
          }
        }

        i {
          margin-right: 0.5em;
        }
      }
    }

    @media screen and (max-width: 992px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8em;
      cursor: pointer;

      ul {
        display: none;
      }
      > div {
        padding: 0.2em;
      }

      > div:last-child {
        padding: 0;
        i {
          font-size: 2.2rem;

          &:active {
            transform: scale(0.9);
          }
        }
      }
    }
  `,
};

export default Wrapper;

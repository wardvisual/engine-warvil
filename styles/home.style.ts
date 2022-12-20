import styled from 'styled-components';

const Wrapper = {
  Home: styled.section`
    height: 100vh;
    margin: 0 auto;
    max-width: 1660px;
  `,
  Header: styled.header`
    div {
      padding: 2em;

      &.message-box {
        border-bottom: 1px var(--color-black-400) solid;
      }
    }

    @media screen and (max-width: 992px) {
      div {
        img {
          max-width: 10em !important;
        }
        padding: 0.5em;
        margin-bottom: 0.8em;
      }
    }
  `,
  Container: styled.div`
    display: flex;
    gap: 1em;

    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
  `,
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
  Playground: styled.div`
    background-color: var(--color-black-300);
    border-radius: var(--radius-15);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 45em;
  `,
  EngineArea: styled.div`
    border-radius: var(--radius-15);
    background-color: var(--color-black-300);
    min-height: 32em;
  `,
  UserArea: styled.form`
    border-radius: var(--radius-15);
    background-color: var(--color-black-300);
    padding: 1em;

    > div {
      display: flex;
      align-items: center;
      gap: .8em;

      button {
        all: unset;
      }

      i {
        font-size: 1.8rem;
        &:hover {
          cursor: pointer;
          color: var(--color-blue-400);
        &:active {
          transform: scale(0.95);
        }
    }
  `,
  MessageBoxContainer: styled.div`
    display: grid;
    grid-gap: 1em;
    overflow: auto;
    max-height: 32em;

    .loading {
      margin-left: 1em;

      > div {
        background: var(--color-black-400);
        padding: 0.8em;
        color: var(--color-white-300);
        max-width: max-content;
        width: inherit;
        border-radius: var(--radius-10);
      }
    }
  `,
  MessageBox: styled.div`
    padding: 1em;
    > p {
      color: var(--color-white-200);
      font-weight: 600;
      padding-left: 0.2em;
    }
    > div {
      p {
        /* text-align: end; */
        margin-top: 0.5em;
        background: var(--color-black-400);
        padding: 1em;
        color: var(--color-white-300);
        border-radius: var(--radius-10);
      }
    }
  `,
};

export default Wrapper;

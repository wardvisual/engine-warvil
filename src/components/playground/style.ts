import styled from 'styled-components';

const Wrapper = {
  Header: styled.header`
    div {
      padding: 2em;

      &.message-box {
        border-bottom: 1px var(--color-black-400) solid;
      }
    }

    @media screen and (max-width: 992px) {
      div {
        padding: 1em;
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
    position: relative;
    @media screen and (max-width: 992px) {
      min-height: 40em;
    }
  `,
  PreCode: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    user-select: none;
    display: grid;
    place-items: center;
    grid-gap: 1em;

    @media screen and (max-width: 992px) {
      display: none;
    }

    i {
      font-size: 4rem;
      color: var(--color-blue-400);
    }

    p {
      color: var(--color-blue-400);
      font-weight: bold;
      margin-bottom: 0.4em;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1em;
      overflow: hidden;

      li {
        padding: 1em;
        background: var(--color-black-400);
        border-radius: var(--radius-10);
        text-align: center;
        display: grid;

        i {
          font-size: 1.8rem;
          margin: 0.2em 0 0.5em 0;
          color: var(--color-white-400);
          &:hover {
            color: var(--color-blue-400);
          }
        }

        &:hover {
          background-color: var(--color-black-400);
          cursor: pointer;
          color: var(--color-blue-400);

          > * {
            color: var(--color-blue-400);
          }
        }

        &:active {
          transform: scale(0.95);
        }
      }
    }
  `,

  EngineArea: styled.div`
    border-radius: var(--radius-15);
    background-color: var(--color-black-300);
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
        margin-top: 0.5em;
        background: var(--color-black-400);
        padding: 0.8em;
        color: var(--color-white-300);
        max-width: max-content;
        width: inherit;
        border-radius: var(--radius-10);
      }
    }
  `,
};

export default Wrapper;

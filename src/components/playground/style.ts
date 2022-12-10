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
};

export default Wrapper;

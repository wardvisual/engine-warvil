import styled from 'styled-components';

const Style = {
  Wrapper: styled.main`
    height: 100vh;
    display: grid;
    place-items: center;
    margin: 0 2em 0 2em;
    position: relative;
    @media screen and (max-width: 570px) {
      margin: 0 1em 0 1em;
      > div {
        padding: 0;
        box-shadow: unset;
      }
    }
  `,
  SubWrapper: styled.div`
    padding: 2em;
    border-radius: 10px;
    grid-gap: 1em;
    display: grid;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    width: 100%;
    max-width: 25em;
    z-index: 9;
    background: var(--color-black-300);
    form {
      display: flex;
      flex-direction: column;
      gap: 1em;

      > div {
        padding: 1em;
        background: var(--color-green);
        border-radius: 5px;
        p {
          opacity: 0.8;
          padding: 0 0.2em 0 0.2em;
        }
      }
      button {
        background: var(--color-blue-400);
        color: var(--color-black-400);
      }
    }
  `,
};

export default Style;

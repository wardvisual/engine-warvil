import styled from 'styled-components';

const Style = {
  Wrapper: styled.main`
    height: 100vh;

    display: grid;
    place-items: center;
  `,
  SubWrapper: styled.div`
    padding: 2em;
    border-radius: 10px;
    grid-gap: 1em;
    display: grid;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    width: 100%;
    max-width: 30em;

    form {
      display: flex;
      flex-direction: column;
      gap: 1em;

      p {
        opacity: 0.8;
        padding: 0 0.2em 0 0.2em;
      }
    }
  `,
};

export default Style;

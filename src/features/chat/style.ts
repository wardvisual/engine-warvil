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

    form {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
  `,
};

export default Style;

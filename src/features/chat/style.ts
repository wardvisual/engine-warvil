import styled from 'styled-components';

const Style = {
  Wrapper: styled.main`
    height: 100vh;

    display: grid;
    place-items: center;
  `,
  SubWrapper: styled.div`
    border: 1px var(--color-blue) solid;
    padding: 2em;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 1em;
  `,
};

export default Style;

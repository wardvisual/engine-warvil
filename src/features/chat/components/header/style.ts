import styled from 'styled-components';

const Style = {
  Wrapper: styled.div`
    display: grid;
    place-items: center;
    > div {
      margin-top: 1em;
      color: var(--color-grey);
      background: var(--color-purple);
      padding: 1em;
      border-radius: 5px;
    }
  `,
};

export default Style;

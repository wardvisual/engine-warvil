import styled from 'styled-components';

const Wrapper = {
  Navbar: styled.div`
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
};

export default Wrapper;

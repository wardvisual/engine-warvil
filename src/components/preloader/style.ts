import styled from 'styled-components';

const Wrapper = {
  Preloader: styled.div`
    background: var(--color-black-400);
    width: 100vw;
    height: 100vh;
    position: fixed;

    display: grid;
    place-items: center;
    z-index: 99999;
    opacity: 1;

    transition: opacity 0.5s ease-out;

    &.hidden {
      opacity: 0;
      display: none;
    }

    > div {
      margin: 1em;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media screen and (max-width: 992px) {
      img {
        max-width: 17em !important;
      }
    }
  `,
};

export default Wrapper;

import styled from 'styled-components';

const Wrapper = {
  Home: styled.section`
    height: 100vh;
    margin: 0 auto;
    margin: 0 auto;
    max-width: 1660px;
  `,
  Header: styled.header`
    div {
      padding: 1em;
    }
  `,
  Container: styled.div`
    display: flex;
    gap: 1em;
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

    div {
      padding: 1em;
    }

    ul {
      li {
        padding: 1em;
        background-color: var(--color-black-300);
        border: none;
        transition: all 0.3s ease-in-out;
        min-width: max-content;
        &:hover {
          border-radius: var(--radius-15);
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
  `,
  Playground: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: var(--color-black-300);
    border-radius: var(--radius-15);
    width: 100%;
  `,
  TextArea: styled.div`
    padding: 1em;
    border-radius: var(--radius-15);
    background-color: var(--color-black-300);
  `,
};

export default Wrapper;

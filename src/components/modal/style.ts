import styled from 'styled-components';

const Wrapper = {
  Modal: styled.div`
    z-index: 9999999999;
    padding: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-black-300);
    border-radius: var(--radius-5);
    min-height: max-content;
    width: 90%;
    max-width: 40em;
    max-height: 40em;
  `,
  ModalHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    border-bottom: 1px var(--color-black-400) solid;
    padding: 1em !important;

    i {
      font-size: 1.5rem;
      cursor: pointer;
    }
  `,
  ModalBody: styled.div`
    padding: 1em !important;
  `,
  Overlay: styled.div`
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 40%;
    background: black;
    filter: blur(4px);
  `,
};

export default Wrapper;

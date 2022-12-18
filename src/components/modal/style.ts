import styled from 'styled-components';

const Wrapper = {
  Modal: styled.div`
    z-index: 9999;
    padding: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-black-300);
    border-radius: var(--radius-5);
    min-width: max-content;
    min-height: max-content;
    max-width: 40em;
    max-height: 40em;
  `,
  ModalHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    border-bottom: 1px var(--color-black-400) solid;

    i {
      font-size: 1.5rem;
      cursor: pointer;
    }
  `,
  ModalBody: styled.div`
    padding: 1em;
  `,
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-black-100);
    opacity: 40%;
  `,
};

export default Wrapper;

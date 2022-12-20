import React from 'react';
import { NextPage } from 'next';

import Wrapper from './style';
import { Modalable } from 'lib/types/props';

const Modal: NextPage<Modalable> = (prop: Modalable) => {
  return (
    <div>
      {prop.display && (
        <>
          <Wrapper.Overlay onClick={prop.handleOnClose} />
          <Wrapper.Modal style={{ ...prop.customStyle }}>
            <Wrapper.ModalHeader>
              <h2>{prop.title}</h2>
              <i className="fas fa-times" onClick={prop.handleOnClose}></i>
            </Wrapper.ModalHeader>
            <Wrapper.ModalBody>{prop.children}</Wrapper.ModalBody>
          </Wrapper.Modal>
        </>
      )}
    </div>
  );
};

export default Modal;

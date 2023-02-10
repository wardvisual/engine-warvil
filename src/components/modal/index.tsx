import React from 'react';
import { NextPage } from 'next';

import Wrapper from './style';
import { Modalable } from 'lib/types/props';

const Modal: NextPage<Modalable> = (prop: Modalable) => {
  return (
    <>
      {prop.display && (
        <>
        {prop.onBgClose ? (<Wrapper.Overlay onClick={prop.handleOnClose} />) : (<Wrapper.Overlay />) }
          <Wrapper.Modal
            style={{
              ...prop.customStyle,
              display: prop.display ? '' : 'hidden',
            }}
          >
            <Wrapper.ModalHeader>
              <h2>{prop.title}</h2>
              <i className="fas fa-times" onClick={prop.handleOnClose}></i>
            </Wrapper.ModalHeader>
            <Wrapper.ModalBody>
              <hr />
              {prop.children}
            </Wrapper.ModalBody>
          </Wrapper.Modal>
        </>
      )}
    </>
  );
};

export default Modal;

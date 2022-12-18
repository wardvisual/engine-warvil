import React from 'react';
import { NextPage } from 'next';

import Wrapper from './style';
import { useState, useEffect } from 'react';

const Modal: NextPage = (prop: any) => {
  return (
    prop.display && (
      <div>
        <Wrapper.Overlay onClick={prop.handleOnClose} />
        <Wrapper.Modal>
          <Wrapper.ModalHeader>
            <h2>Modal Title</h2>
            <i className="fas fa-times" onClick={prop.handleOnClose}></i>
          </Wrapper.ModalHeader>
          <Wrapper.ModalBody>{prop.children}</Wrapper.ModalBody>
        </Wrapper.Modal>
      </div>
    )
  );
};

export default Modal;

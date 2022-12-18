/* eslint-disable react-hooks/exhaustive-deps */
import { CommandBoxable } from 'lib/types/props';
import { NextPage } from 'next';
import React from 'react';

import Wrapper from './style';
import { useState, useEffect } from 'react';
import { commands } from '../../../lib/constants/commands';
import Modal from '../modal/index';

const CommandBox: NextPage<CommandBoxable> = (prop: CommandBoxable) => {
  const [showUnavailableModal, setUnavailableModal] = useState<{
    isShow: boolean;
    command: string;
  }>({ isShow: false, command: '' });
  const [listOfCommands, setListOfCommands] = useState<boolean>(false);
  const [mobileDeviceBreakpoint, setMobileDeviceBreakpoint] =
    useState<boolean>(false);

  const showModal = (command: string) => {
    setUnavailableModal({ isShow: !showUnavailableModal.isShow, command });
  };

  const handleUnavailableModalClose = () => {
    setUnavailableModal({ isShow: !showUnavailableModal.isShow, command: '' });
  };

  const handleOnListOfCommandClose = () => {
    setListOfCommands(!listOfCommands);
  };

  const list = [
    {
      icon: 'fa-question-circle',
      name: 'Basic question',
      onClick: (command: string) => showModal(command),
    },
    {
      icon: 'fa-code',
      name: 'Generate code',
      onClick: (command: string) => 1,
    },
    {
      icon: 'fa-book',
      name: 'Generate thesis title',
      onClick: (command: string) => showModal(command),
    },
    {
      icon: 'fa-check',
      name: 'Grammar correction',
      onClick: (command: string) => showModal(command),
    },
    {
      icon: 'fa-quote-right',
      name: 'Paraphrase',
      onClick: (command: string) => showModal(command),
    },
    {
      icon: 'fa-book-reader',
      name: 'Summarize for a grade student',
      onClick: (command: string) => showModal(command),
    },
    {
      icon: 'fa-globe',
      name: 'English to other language',
      onClick: (command: string) => showModal(command),
    },
    {
      icon: 'fa-file-code',
      name: 'Explain programming code',
      onClick: (command: string) => showModal(command),
    },
    {
      icon: 'fa-balance-scale',
      name: 'Evaluate a mathematical expression',
      onClick: (command: string) => showModal(command),
    },
    {
      icon: 'fa-calculator',
      name: 'Evaluate a math equation',
      onClick: (command: string) => showModal(command),
    },
    {
      icon: 'fa-book-open',
      name: 'Create study notes',
      onClick: (command: string) => showModal(command),
    },
  ];

  useEffect(() => {
    if (prop.breakpoint === 'S') {
      setMobileDeviceBreakpoint(!mobileDeviceBreakpoint);
    }
  }, []);

  return (
    <Wrapper.Commands onClick={handleOnListOfCommandClose}>
      <Modal
        title={showUnavailableModal.command}
        display={showUnavailableModal.isShow}
        handleOnClose={handleUnavailableModalClose}
      >
        <p>This command is currently not available</p>
      </Modal>
      {mobileDeviceBreakpoint && (
        <>
          <div>
            <h2>Choose Commands</h2>
          </div>
          <Modal
            title={'Choose Commands'}
            display={listOfCommands}
            handleOnClose={handleOnListOfCommandClose}
          >
            <ul>
              {list.map((el, index) => (
                <li key={index} onClick={() => el.onClick(el.name)}>
                  <i className={`fas ${el.icon} `}></i>&nbsp;{el.name}
                </li>
              ))}
            </ul>
          </Modal>
          <div>
            <i className="fa fa-caret-down"></i>
          </div>
        </>
      )}
      {!mobileDeviceBreakpoint && (
        <>
          <div>
            <h2>Choose Commands</h2>
          </div>
          <ul>
            {list.map((el, index) => (
              <li key={index} onClick={() => el.onClick(el.name)}>
                <i className={`fas ${el.icon} `}></i>&nbsp;{el.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </Wrapper.Commands>
  );
};

export default CommandBox;

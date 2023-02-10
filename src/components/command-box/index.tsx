/* eslint-disable react-hooks/exhaustive-deps */
import { CommandBoxable } from 'lib/types/props';
import { NextPage } from 'next';
import React from 'react';

import Wrapper from './style';
import { useState, useEffect } from 'react';
import Modal from '../modal/index';
import { commands } from 'lib/constants/constant.command';
import { content } from 'lib/data/data.content';

const CommandBox: NextPage<CommandBoxable> = (prop: CommandBoxable) => {
  const [showUnavailableModal, setUnavailableModal] = useState<{
    isShow: boolean;
    command: string;
  }>({ isShow: false, command: '' });
  const [listOfCommands, setListOfCommands] = useState<boolean>(false);
  const [mobileDeviceBreakpoint, setMobileDeviceBreakpoint] =
    useState<boolean>(false);

  const showModal = (index: number) => {
    setUnavailableModal({
      isShow: !showUnavailableModal.isShow,
      command: content[Object.keys(commands)[index]]['title'],
    });
  };

  const handleUnavailableModalClose = () => {
    setUnavailableModal({ isShow: !showUnavailableModal.isShow, command: '' });
  };

  const handleOnListOfCommandClose = () => {
    setListOfCommands(!listOfCommands);
  };

  const list = [
    {
      icon: 'fa-book',
      name: 'Generate Thesis Titles',
      onClick: (index: number) => {
        const isDisabled: boolean =
          content[Object.keys(commands)[index]].isDisabled;

        if (isDisabled) {
          showModal(index);
        }

        prop.handleCommandChange(index, isDisabled);
      },
    },
    {
      icon: 'fa-question-circle',
      name: 'Answer Basic Questions',
      onClick: (index: number) => {
        const isDisabled: boolean =
          content[Object.keys(commands)[index]].isDisabled;

        if (isDisabled) {
          showModal(index);
        }

        prop.handleCommandChange(index, isDisabled);
      },
    },
    {
      icon: 'fa-code',
      name: 'Generate code',
      onClick: (index: number) => {
        const isDisabled: boolean =
          content[Object.keys(commands)[index]].isDisabled;

        if (isDisabled) {
          showModal(index);
        }

        prop.handleCommandChange(index, isDisabled);
      },
    },

    {
      icon: 'fa-check',
      name: 'Correct Grammar',
      onClick: (index: number) => {
        const isDisabled: boolean =
          content[Object.keys(commands)[index]].isDisabled;

        if (isDisabled) {
          showModal(index);
        }

        prop.handleCommandChange(index, isDisabled);
      },
    },
    {
      icon: 'fa-quote-right',
      name: 'Paraphrase Text',
      onClick: (index: number) => {
        const isDisabled: boolean =
          content[Object.keys(commands)[index]].isDisabled;

        if (isDisabled) {
          showModal(index);
        }

        prop.handleCommandChange(index, isDisabled);
      },
    },
    {
      icon: 'fa-book-reader',
      name: 'Summarize',
      onClick: (index: number) => {
        const isDisabled: boolean =
          content[Object.keys(commands)[index]].isDisabled;

        if (isDisabled) {
          showModal(index);
        }

        prop.handleCommandChange(index, isDisabled);
      },
    },
    {
      icon: 'fa-globe',
      name: 'Translate to Other Languages',
      onClick: (index: number) => {
        const isDisabled: boolean =
          content[Object.keys(commands)[index]].isDisabled;

        if (isDisabled) {
          showModal(index);
        }

        prop.handleCommandChange(index, isDisabled);
      },
    },
    {
      icon: 'fa-file-code',
      name: 'Explain Programming Code',
      onClick: (index: number) => {
        const isDisabled: boolean =
          content[Object.keys(commands)[index]].isDisabled;

        if (isDisabled) {
          showModal(index);
        }

        prop.handleCommandChange(index, isDisabled);
      },
    },
    {
      icon: 'fa-calculator',
      name: 'Evaluate Mathematical Expressions',
      onClick: (index: number) => {
        const isDisabled: boolean =
          content[Object.keys(commands)[index]].isDisabled;

        if (isDisabled) {
          showModal(index);
        }

        prop.handleCommandChange(index, isDisabled);
      },
    },
    {
      icon: 'fa-book-open',
      name: 'Create Study Notes',
      onClick: (index: number) => {
        const isDisabled: boolean =
          content[Object.keys(commands)[index]].isDisabled;

        if (isDisabled) {
          showModal(index);
        }

        prop.handleCommandChange(index, isDisabled);
      },
    },
  ];

  useEffect(() => {
    if (prop.breakpoint === 'S') {
      setMobileDeviceBreakpoint(true);
    }

    if (prop.breakpoint === 'L') {
      setMobileDeviceBreakpoint(false);
    }
  }, [prop.breakpoint]);

  return (
    <Wrapper.Commands onClick={handleOnListOfCommandClose}>
      <Modal
        title={showUnavailableModal.command}
        display={showUnavailableModal.isShow}
        handleOnClose={handleUnavailableModalClose}
        onBgClose={true}
      >
        <p>This command is currently not available</p>
      </Modal>
      {mobileDeviceBreakpoint && (
        <div className="mobile">
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
                <li key={index} onClick={() => el.onClick(index)}>
                  <i className={`fas ${el.icon} `}></i>&nbsp;{el.name}
                </li>
              ))}
            </ul>
          </Modal>
          <div>
            <i className="fa fa-caret-down"></i>
          </div>
        </div>
      )}
      {!mobileDeviceBreakpoint && (
        <>
          <div>
            <h2>Choose Commands</h2>
          </div>
          <ul>
            {list.map((el, index) => (
              <li
                key={index}
                onClick={() => el.onClick(index)}
                className={`${
                  prop.command === Object.keys(commands)[index] ? 'active' : ''
                }`}
              >
                <i className={`fas ${el.icon} `}></i>
                &nbsp;{el.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </Wrapper.Commands>
  );
};

export default CommandBox;

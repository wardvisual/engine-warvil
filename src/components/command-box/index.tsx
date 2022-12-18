/* eslint-disable react-hooks/exhaustive-deps */
import { CommandBoxable } from 'lib/types/props';
import { NextPage } from 'next';
import React from 'react';

import Wrapper from './style';
import { useEffect, useRef, useState } from 'react';
import { commands } from '../../../lib/constants/commands';
import Modal from '../modal/index';

const CommandBox: NextPage<CommandBoxable> = (prop: CommandBoxable) => {
  const commandListBox = useRef<HTMLUListElement>(null);
  const [display, setDisplayModal] = useState<boolean>(false);

  const showModal = (command: string) => {
    console.log({ command });
    setDisplayModal(!display);
  };

  const handleOnClose = () => {
    setDisplayModal(!display);
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

  return (
    <Wrapper.Commands>
      <Modal display={display} handleOnClose={handleOnClose}>
        <p>This command is currently not available</p>
      </Modal>
      <div>
        <h2>Choose Commands</h2>
      </div>
      <ul ref={commandListBox}>
        {list.map((el, index) => (
          <li key={index} onClick={() => el.onClick(el.name)}>
            <i className={`fas ${el.icon} `}></i>&nbsp;{el.name}
          </li>
        ))}
      </ul>
      {
        <div>
          <i className={prop.breakpoint === 'S' ? `fa fa-caret-down` : ''}></i>
        </div>
      }
    </Wrapper.Commands>
  );
};

export default CommandBox;

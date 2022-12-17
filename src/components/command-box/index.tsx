import { CommandBoxable } from 'lib/types/props';
import { NextPage } from 'next';
import React from 'react';

import Wrapper from './style';

const CommandBox: NextPage<CommandBoxable> = (prop: CommandBoxable) => {
  const list = [
    {
      icon: 'fa-question-circle',
      name: 'Basic question',
    },
    {
      icon: 'fa-code',
      name: 'Generate code',
    },
    {
      icon: 'fa-book',
      name: 'Generate thesis title',
    },
    {
      icon: 'fa-check',
      name: 'Grammar correction',
    },
    {
      icon: 'fa-quote-right',
      name: 'Paraphrase',
    },
    {
      icon: 'fa-book-reader',
      name: 'Summarize for a grade student',
    },
    {
      icon: 'fa-globe',
      name: 'English to other language',
    },
    {
      icon: 'fa-file-code',
      name: 'Explain programming code',
    },
    {
      icon: 'fa-balance-scale',
      name: 'Evaluate a mathematical expression',
    },
    {
      icon: 'fa-calculator',
      name: 'Evaluate a math equation',
    },
    {
      icon: 'fa-book-open',
      name: 'Create study notes',
    },
  ];
  return (
    <Wrapper.Commands>
      <div>
        <h2>Choose Commands</h2>
      </div>
      <ul>
        {list.map((el, index) => (
          <li key={index}>
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

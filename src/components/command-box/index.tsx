import { CommandBoxable } from 'lib/types/props';
import { NextPage } from 'next';
import React from 'react';

import Wrapper from './style';

const CommandBox: NextPage<CommandBoxable> = (prop: CommandBoxable) => {
  return (
    <Wrapper.Commands>
      <div>
        <h2>Choose Commands</h2>
      </div>
      <ul>
        <li>
          <i className="fas fa-question-circle"></i> Basic question
        </li>
        <li>
          <i className="fas fa-code"></i> Generate code
        </li>
        <li>
          <i className="fas fa-book"></i> Generate thesis title
        </li>
        <li>
          <i className="fas fa-check"></i> Grammar correction
        </li>
        <li>
          <i className="fas fa-quote-right"></i>
          Paraphrase
        </li>
        <li>
          <i className="fas fa-book-reader"></i> Summarize for a grade student
        </li>
        <li>
          <i className="fas fa-globe"></i> English to other language
        </li>
        <li>
          <i className="fas fa-file-code"></i> Explain programming code
        </li>
        <li>
          <i className="fas fa-balance-scale"></i> Evaluate a mathematical
          expression
        </li>
        <li>
          <i className="fas fa-calculator"></i> Evaluate a math equation
        </li>
        <li>
          <i className="fas fa-book-open"></i> Create study notes
        </li>
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

/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import { useState } from 'react';

import Wrapper from './style';
import { Layout } from '../../../styles/global-style';
import MessageBox from '../../components/message-box/index';

import { chats } from './data';

const Home: NextPage = (props) => {
  return (
    <Layout>
      <Wrapper.Home>
        <Wrapper.Header>
          <div>
            <h1>Engine Warvil</h1>
            <p>Your OpenAI Assistant | Edward Fernandez</p>
          </div>
        </Wrapper.Header>
        <Wrapper.Container>
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
                <i className="fas fa-check"></i> Grammar correction
              </li>
              <li>
                <i className="fas fa-quote-right"></i>
                Paraphrase
              </li>
              <li>
                <i className="fas fa-book-reader"></i> Summarize for a grade
                student
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
          </Wrapper.Commands>
          <Wrapper.Playground>
            <Wrapper.Header>
              <div className="message-box">
                <h2>Basic Question</h2>
                <p>Answers at your fingertips</p>
              </div>
            </Wrapper.Header>
            <Wrapper.EngineArea>
              <Wrapper.MessageBoxContainer>
                {chats.map((el, i) => (
                  <MessageBox
                    key={i}
                    isFromUser={el.isFromUser}
                    message={el.message}
                  />
                ))}
              </Wrapper.MessageBoxContainer>
              {/* <textarea></textarea> */}
            </Wrapper.EngineArea>

            <Wrapper.UserArea>
              <div>
                <input type="text" placeholder="What's on your mind?" />
                <i className="fas fa-paper-plane"></i>
              </div>
            </Wrapper.UserArea>
          </Wrapper.Playground>
        </Wrapper.Container>
      </Wrapper.Home>
    </Layout>
  );
};

export default Home;

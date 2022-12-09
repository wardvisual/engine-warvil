/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import { useState } from 'react';

import Wrapper from './style';
import { Layout } from '../../../styles/global-style';

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
              <div>
                <h2>Basic Question</h2>
                <p>Your OpenAI Assistant | Edward Fernandez</p>
              </div>
            </Wrapper.Header>
            <Wrapper.TextArea>
              <div>
                <div>
                  <p>Warvil</p>
                  <div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
              {/* <textarea></textarea> */}
            </Wrapper.TextArea>
          </Wrapper.Playground>
        </Wrapper.Container>
      </Wrapper.Home>
    </Layout>
  );
};

export default Home;

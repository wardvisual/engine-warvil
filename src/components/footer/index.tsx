import type { NextPage } from 'next';

import Style from './style';

const Footer: NextPage = () => {
  return (
    <Style.Wrapper>
      <p>
        Built with &#60;3 by
        <a
          href="https://github.com/wardvisual"
          target="_blank"
          rel="noreferrer"
          title="Edward Fernandez"
        >
          &nbsp;Edward Fernandez{' '}
        </a>
      </p>
    </Style.Wrapper>
  );
};

export default Footer;

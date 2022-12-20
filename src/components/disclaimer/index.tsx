import React, { useState } from 'react';
import Modal from 'src/components/modal';

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(true);

  const handleOnClose = () => {
    setShowDisclaimer(!showDisclaimer);
  };

  return (
    <Modal
      title="DISCLAIMER"
      display={showDisclaimer}
      handleOnClose={handleOnClose}
      customStyle={{ width: '85%' }}
    >
      <p>
        This application is utilizing a free trial of{' '}
        <a
          href="https://openai.com/"
          target="_blank"
          title="OpenAI "
          rel="noreferrer"
        >
          OpenAI
        </a>
        . If the application experiences any issues, it is likely due to
        excessive usage of the{' '}
        <a
          href="https://en.wikipedia.org/wiki/API_key#:~:text=An%20application%20programming%20interface%20(API,API%20keys%20in%20different%20ways."
          target="_blank"
          title="API Key "
          rel="noreferrer"
        >
          API key
        </a>
        . In this case, please reach out to the{' '}
        <a
          href="https://www.wardvisual.me"
          target="_blank"
          title="Edward Fernandez "
          rel="noreferrer"
        >
          developer
        </a>
        &nbsp;for assistance.
      </p>
      <hr />
      <button onClick={handleOnClose}>I UNDERSTAND</button>
    </Modal>
  );
};

export default Disclaimer;

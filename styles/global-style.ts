import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-black: #181818;
        --color-purple: #8758FF;
        --color-blue: #5CB8E4;
        --color-grey: #F2F2F2;
    }


    * {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    body {
        background: var(--color-black);
        color: var(--color-grey);
        font-family: 'Poppins', sans-serif;;
    } 

    input, button {
        padding: 1em;
        border: none;
    }
`;

export default GlobalStyle;

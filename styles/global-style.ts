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
        background: var(--color-grey);
        color: var(--color-black);
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
    } 

    input, button {
        padding: 1em;
        border: none;
        width: 100%;
    }

    button {
        cursor: pointer;
        background: var(--color-blue);
        padding: 1em 2em 1em 2em;
        font-weight: bold;
        color: var(--color-grey);
        border-radius: 5px;

        &:hover {
            opacity: 80%;
            transition: all .3s;
        }
    }
`;

export default GlobalStyle;

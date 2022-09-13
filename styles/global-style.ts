import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-black: #181818;
        --color-purple: #8758FF;
        --color-green: #d4fade;
        --color-grey: #F2F2F2;
    }


    * {
        padding: 0;
        margin: 0;
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
        color: var(--color-black);
        font-size: inherit;
    }

    button {
        cursor: pointer;
        background: var(--color-purple);
        font-weight: 400;
        color: var(--color-grey);
        border-radius: 5px;

        &:hover {
            opacity: 80%;
            transition: all .3s;
        }
    }
    
    hr {
        opacity: 40%;
        height: .5px;
        color: var(--color-grey);
        margin: .2em 0 .2em 0;
    }
`;

export default GlobalStyle;

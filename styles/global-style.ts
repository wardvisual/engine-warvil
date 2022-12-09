import styled, { createGlobalStyle } from 'styled-components';

export const Layout = styled.div`
  margin: 0 1em 0 1em;
`;

const GlobalStyle = createGlobalStyle`
    :root {
        // Black
        --color-black-100: #222d44;
        --color-black-200: #232530;
        --color-black-300: #232530;
        --color-black-400: #1d1f2a;
        // Blue
        --color-blue-100: #456584;
        --color-blue-200: #5c88b1;
        --color-blue-300: #6ea3d4;
        --color-blue-400: #87c5ff;
        // White
        --color-white-100: #778694;
        --color-white-200: #93a4b5;
        --color-white-300: #a9bdcf;
        --color-white-400: #bdd3e7;
        // Radius
        --radius-5: 5px;
        --radius-10: 10px;
        --radius-15: 15px;
        --radius-20: 20px;
    }

    body {
      background-color: var(--color-black-400);
      font-size: 16px;
    }
  
    a {
      color: var(--color-blue-400);
    }

    * {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        color: var(--color-white-400);
    }

    ul, li {
        list-style-type: none;
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

    select {    
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-color: var(--color-black-300);
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: bold;
        padding: 0.5rem 1rem;
        margin: 0;
        outline: none;

        /* Option elements */
        option {
            background-color: var(--color-black-300);
            border: none;
        }
    }

    input {
        background-color: var(--color-black-400);
    }

    textarea {
        background-color: var(--color-black-400);
        border-radius: 5px;
        border: none;
        outline: none;
        padding: 1.5em;
        min-height: 1.5em;
        font-size: 1em;
        width: 100%;
        max-height: 4em;
        min-width: 40em;
        max-width: 60em;

        /* customize the scrollbar color */
        &::-webkit-scrollbar-thumb {
            background-color: var(--color-white-400);
        }

        /* customize the scrollbar width */
        &::-webkit-scrollbar {
            width: 5px;
        }
    }

    h1 {
        font-size: 2rem;
    }
    
    h2 {
        font-size: 1.3rem;
    }
    
    h3 {
        font-size: 1rem;
    }
`;

export default GlobalStyle;

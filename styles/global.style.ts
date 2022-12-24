import styled, { createGlobalStyle } from 'styled-components';

export const Layout = styled.div`
  margin: 0 1em 0 1em;
  opacity: 0;

  transition: all 0.5s ease-in-out;

  &.display {
    opacity: 1;
  }

  @media screen and (max-width: 992px) {
    margin: 0 0.5em 0 0.5em;
  }
`;

export const HomeOverlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: url("./assets/bg.svg") no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: 20%;
`

const GlobalStyle = createGlobalStyle`
    :root {
        // Black
        --color-black-100: #222d44;
        --color-black-200: #252839;
        --color-black-300: #1E202E;
        --color-black-400: #181A26;
        // Gray
        --color-gray-100: #2F313B;
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

    /* customize the scrollbar color */
    &::-webkit-scrollbar-thumb {
        background-color: var(--color-black-100);
    }

    &::-webkit-scrollbar-track {
        background-color: var(--color-black-400);
    }

    /* customize the scrollbar width */
    &::-webkit-scrollbar {
        width: 4px;
        height: 3px;

        @media screen and (max-width: 992px) {
            width: 2px;
        }
    }

    body {
      background-color: var(--color-black-400);
      font-size: 16px;
    }
  
    a {
      color: var(--color-blue-400);
    }

    p {
      line-height: 1.8;
    }

    * {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        color: var(--color-white-400);
        overflow-x: hidden;
    }

    ul, li {
        list-style-type: none;
    }

    hr {
        opacity: 40%;
        height: .5px;
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

    input, teaxtarea, select, option, button {
        border-radius: var(--radius-5);
        border: none;
        padding: 1em;
        width: 100%;
    }

    button {
        background-color: var(--color-blue-300);
        color: var(--color-black-400);
        cursor: pointer;
        font-weight: 700;
        &.outlined {
            background-color: unset;
            color: var(--color-blue-400);
            border: .5px  var(--color-blue-400) solid;

            &:hover {
                background-color: var(--color-black-400);
             }
        }

        &:hover {
            background-color: var(--color-blue-400);
        }
image.png
        &:active {
            transform: scale(0.99);
        }
    }

    input, textarea {
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: var(--color-white-100);
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--color-white-100);
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: var(--color-white-100);
        }
    }

    input {
        background-color: var(--color-black-400);
        outline: none;
        border: none;
        width: 100%;
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
    
    hr {
        margin: 1em 0 1em 0;
        height: .2px;
        opacity: 7%;
    }

    @media screen and (max-width: 992px) {
        p, span, b {
            font-size: 14px;
        }
        h1 {
            font-size: 1.5rem;
        }
    
        h2 {
            font-size: 1rem;
        }
        
        h3 {
            font-size: .8rem;
        }
    }


`;

export default GlobalStyle;

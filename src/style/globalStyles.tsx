import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import { color, mediaBreakpointDown, vw } from './mixins';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
            width: 6px;
            background-color: rgba(222, 222, 222, 0.75);
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.5);
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        background-color: rgba(222, 222, 222, 0.75);
    }


    html {
        font-family: ${variables.fonts.default};
        scrollbar-gutter: stable;
        color: ${color('black')};
    }

    body {
        padding: 0;
        margin: 0;
        overscroll-behavior: none;
        overflow: auto;
        
    }

    h1, h2, h3, h4, h5, span, a {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-transform: inherit;
        text-decoration: inherit;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        outline: none;
    }
    
    ul {
      margin: 0;
      padding-inline-start: ${vw(24)};
      list-style-type: none;
      li {
          position: relative;
          &:before {
            position: absolute;
            top: 9px;
            left: ${vw(-20)};
            content: "";
            display: inline-block;
            height: ${vw(10)};
            width: ${vw(10)};
            vertical-align: middle;
            border-radius: 50%;
            background-color: ${color('orange')};
            margin-right: 10px;
            
            ${mediaBreakpointDown('md')} {
                width: 7px;
                height: 7px;
                top: 12px;
                left: ${vw(-12, 'xs')};
            }
          }
          
        }
    }

    button {
        font-family: ${variables.fonts.default};
        
        &, &:active,
        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyle;

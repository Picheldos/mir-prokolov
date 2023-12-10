import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import { color, mediaBreakpointUp, vw } from './mixins';

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
      padding-inline-start: ${vw(12, 'xs')};
      list-style-type: none;
      
      ${mediaBreakpointUp('md')} {
        padding-inline-start: ${vw(15, 'md')};
      }
  
      ${mediaBreakpointUp('lg')} {
        padding-inline-start: ${vw(24)};
      }
      
      li {
          position: relative;
          &:before {
            position: absolute;
            
            width: 7px;
            height: 7px;
            top: 5px;
            left: ${vw(-12, 'xs')};
            
            content: "";
            display: inline-block;
            vertical-align: middle;
            border-radius: 50%;
            background-color: ${color('orange')};
            margin-right: 10px;
            
            ${mediaBreakpointUp('md')} {
              width: ${vw(7, 'md')};
              height: ${vw(7, 'md')};
              top: ${vw(7, 'md')};
              left: ${vw(-12, 'md')};
            }
  
            ${mediaBreakpointUp('lg')} {
              height: ${vw(10)};
              width: ${vw(10)};
              top: 9px;
              left: ${vw(-20)};
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

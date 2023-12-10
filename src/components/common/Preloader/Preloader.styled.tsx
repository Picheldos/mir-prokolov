import styled from 'styled-components';
import { color, mediaBreakpointUp } from '@/style/mixins';

export const Container = styled.div<{hidden: boolean}>`
    display: flex;
   
    position: fixed;
   
    width: 100vw;
    height: 100vh;
    
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    z-index: 99;
    
    opacity: 1;
    pointer-events: none;
    
    background: ${color('white')};
    
    align-content: center;
    
    transition: opacity 1.2s ease-in-out;
    
    
    ${({hidden}) => !hidden && `
        opacity: 0;

    `}

    & > div {
      margin-left: auto;
      margin-right: auto;
      
      transition: transform 0.2s ease-in-out;
      
      ${({hidden}) => !hidden && `
         transform: scale(5);
         ${mediaBreakpointUp('lg')} {
            transform: scale(15);
         }
      `}
    }
`;

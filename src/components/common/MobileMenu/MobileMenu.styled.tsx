import styled from 'styled-components';
import { color, font, vw } from '@/style/mixins';

export const Container = styled.div<{showed: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  z-index: 9;
  
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  
  padding: ${vw(20, 'xs')} ${vw(12, 'xs')};
  
  background-color: ${color('white')};
  opacity: 0;
  pointer-events: none;
  
  transition: opacity 0.3s ease-in-out;
  
  ${({showed}) => showed && `
    opacity: 1;
    pointer-events: all;
  `}
`;

export const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-top: ${vw(96, 'xs')};
  
  a {
    margin-bottom: ${vw(12, 'xs')};
    ${font('title')};
    color: ${color('orange')};
  }
`;
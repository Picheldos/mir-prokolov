import styled from 'styled-components';
import { color, mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  
  width: ${vw(48)};
  height: ${vw(48)};
  border-radius: 50%;
  
  background-color: ${color('white')};
    
  transition: background-color 0.5s ease-in-out;
  
  &:hover {
    cursor: pointer;
    background-color: ${color('orange')};
    svg path {
      stroke: ${color('white')};
    }
  }
  
  ${mediaBreakpointDown('lg')} {
      width: ${vw(48, 'md')};
      height: ${vw(48, 'md')};
  }
  
  svg {
    margin: auto;
    stroke-width: 3px;
    width: ${vw(10)};
    height: ${vw(22)};
    
    ${mediaBreakpointDown('lg')} {
      width: ${vw(10, 'md')};
      height: ${vw(22, 'md')};
  }
    
    path {
      stroke: ${color('orange')};
      transition: stroke 0.5s ease-in-out;
    }
  }
`;
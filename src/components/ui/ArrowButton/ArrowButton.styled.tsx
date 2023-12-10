import styled from 'styled-components';
import { color, mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  
  width: ${vw(38, 'xs')};
  height: ${vw(38, 'xs')};
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
  
  ${mediaBreakpointUp('md')} {
      width: ${vw(48, 'md')};
      height: ${vw(48, 'md')};
  }
  
  ${mediaBreakpointUp('lg')} {
      width: ${vw(48)};
      height: ${vw(48)};
  }
  
  svg {
    margin: auto;
    stroke-width: 3px;
    width: ${vw(8, 'xs')};
    height: ${vw(18,'xs')};
    
    ${mediaBreakpointUp('md')} {
      width: ${vw(10, 'md')};
      height: ${vw(22, 'md')};
    }
    
    ${mediaBreakpointUp('md')} {
      width: ${vw(10)};
      height: ${vw(22)};
    }
    
    path {
      stroke: ${color('orange')};
      transition: stroke 0.5s ease-in-out;
    }
  }
`;
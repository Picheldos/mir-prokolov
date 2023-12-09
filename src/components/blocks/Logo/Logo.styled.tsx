import styled from 'styled-components';
import { color, font, mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  
  &:hover {
    cursor: pointer;
  }
  
  div {
    margin-left: ${vw(24)};
    ${font('logo')};

    text-transform: uppercase;
  }
  
  span {
    display: block;
    background: ${color('orange')};
    border-radius: 50%;
    width: ${vw(24, 'xs')};
    height: ${vw(24, 'xs')};
    
    ${mediaBreakpointUp('lg')} {
      width: ${vw(48)};
      height: ${vw(48)};
    }
  }
`;
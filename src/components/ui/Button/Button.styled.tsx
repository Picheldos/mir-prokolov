import styled from 'styled-components';
import { color, font, mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.div`
  padding: ${vw(11)} ${vw(26)};
  border-radius: 40px;
  color: ${color('orange')};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  ${font('link')};
  background-color: ${color('white')};
  
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
  
  &:hover {
    background-color: ${color('orange')};
    color: ${color('white')};
    cursor: pointer;
  }
  
  
  ${mediaBreakpointDown('md')} {
    padding: ${vw(6, 'xs')} ${vw(18, 'xs')};
  }
`;
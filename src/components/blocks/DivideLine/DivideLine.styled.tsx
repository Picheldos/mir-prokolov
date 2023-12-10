import styled from 'styled-components';
import { color, mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const DivideLineOrange = styled.div<{width: number}>`
  width: ${({ width }) => `calc(100% - ${width}%)`};
  height: ${vw(12)};
  background: ${color('orange')};
    
  ${mediaBreakpointDown('md')} {
    height: ${vw(6, 'xs')};
  }
`;

export const DivideLineGray = styled.div<{width: number}>`
  width: ${({ width }) => `calc(100% - ${width}%)`};
  height: ${vw(12)};
  background: ${color('gray')};
    
  ${mediaBreakpointDown('md')} {
    height: ${vw(6, 'xs')};
  }

`;
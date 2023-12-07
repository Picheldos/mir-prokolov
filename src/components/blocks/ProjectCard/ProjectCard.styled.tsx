import styled from 'styled-components';
import { mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.div<{inView: boolean}>`
  position: relative;
  pointer-events: none;

  
  width: ${vw(503)};
  height: ${vw(312)};
  
  margin-bottom: ${vw(12)};
  
  img {
    border-radius: 20px;
  }
  
  transition: opacity 0.5s ease-in-out;
  
  opacity: ${({inView}) => inView ? 1 : 0.5};
  
  ${mediaBreakpointDown('lg')} {
    width: ${vw(330, 'md')};
    height: ${vw(200, 'md')};
    margin-bottom: ${vw(12, 'md')};
  }
  
  ${mediaBreakpointDown('md')} {
    width: 100%;
    height: ${vw(200, 'xs')};
  }
`
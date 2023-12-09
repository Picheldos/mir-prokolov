import styled from 'styled-components';
import { mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  
  flex-wrap: wrap;
  
  height: ${vw(550, 'xs')};
  
  overflow: auto;
  padding-right: ${vw(24)};
  width: 100%;
  
  ${mediaBreakpointUp('md')} {
    height: ${vw(768, 'md')};
  }
  
  ${mediaBreakpointUp('lg')} {
    height: calc(100vh - ${vw(192)});
  }
`;

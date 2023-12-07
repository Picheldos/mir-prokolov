import styled from 'styled-components';
import { mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  
  flex-wrap: wrap;
  height: calc(100vh - ${vw(192)});
  
  overflow: auto;
  padding-right: ${vw(24)};
  width: 100%;
  
  ${mediaBreakpointDown('lg')} {
    height: ${vw(768, 'md')}
  }
`;

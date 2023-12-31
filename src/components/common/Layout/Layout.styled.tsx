import styled from 'styled-components';
import { mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.main`
    position: relative;
    padding-top: ${vw(96)};
    
    ${mediaBreakpointDown('lg')} {
      padding-top: 0;
    }
`;

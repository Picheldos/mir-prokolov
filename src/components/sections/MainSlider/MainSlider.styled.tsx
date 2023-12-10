import styled from 'styled-components';
import { color, font, mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: ${vw(450, 'xs')};
  padding: ${vw(32, 'xs')} ${vw(18, 'xs')};
  
  position: relative;
  
  ${mediaBreakpointUp('md')} {
    height: ${vw(780, 'md')};
    padding: ${vw(96)};
  }
  
  ${mediaBreakpointUp('lg')} {
    height: ${vw(570)};
    flex-direction: row;
  }
`;

export const MainSliderImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const MainSliderTitle = styled.div`
  ${font('title')};
  width: 100%;
  color: ${color('white')};
  text-shadow: 0 4px 8px #00000040;
  
  ${mediaBreakpointUp('lg')} {
    width: ${vw(700)};
  }

`;

export const MainSliderButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-left: auto;
  
  & > a:not(:first-of-type) {
    margin-left: ${vw(24)};
  }
`;
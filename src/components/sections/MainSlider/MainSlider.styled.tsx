import styled from 'styled-components';
import { color, font, mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: -2;
  width: 100%;
  height: ${vw(450, 'xs')};
  padding: ${vw(32, 'xs')} ${vw(18, 'xs')};
  
  position: relative;
  
  background-color: ${color('orange', 0.65)};
  
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
  top: ${vw(150, 'xs')};
  left: ${vw(18, 'xs')};
  
  width: ${vw(350, 'xs')};
  height: ${vw(240, 'xs')};
  
  
  
  filter: brightness(0.7);
  
  
  ${mediaBreakpointUp('md')} {
    top: ${vw(250, 'md')};
    left: ${vw(48, 'md')};
    
    width: ${vw(640, 'md')};
    height: ${vw(475, 'md')};
  }
  
  ${mediaBreakpointUp('lg')} {
    top: 0;
    left: ${vw(850)};
    
    width: ${vw(920)};
    height: ${vw(560)};
  }
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
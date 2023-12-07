import styled from 'styled-components';
import { color, font, mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${vw(570)};
  padding: ${vw(96)};
  position: relative;
  
  ${mediaBreakpointDown('lg')} {
    height: ${vw(500, 'md')};
  }
  
  ${mediaBreakpointDown('md')} {
    height: ${vw(300, 'xs')};
    flex-direction: column;
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
  width: ${vw(700)};
  color: ${color('white')};
  text-shadow: 0 4px 8px #00000040;
  
  ${mediaBreakpointDown('xl')} {
    width: 100%;
  }

`;

export const MainSliderButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-left: auto;
  
  & > div:not(:first-of-type) {
    margin-left: ${vw(24)};
  }
`;
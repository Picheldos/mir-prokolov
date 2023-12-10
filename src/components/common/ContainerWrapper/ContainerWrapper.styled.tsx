import styled from "styled-components";
import { color, font, mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.section<{swiper: boolean; grayBg?: boolean}>`
  display: flex;
  flex-direction: column;
  
  
  color: ${color('black')};
  position: relative;
  padding: ${vw(32, 'xs')} ${vw(18, 'xs')};
  background-color: ${({grayBg}) => grayBg ? color('background') : color('white')};
  
  
  ${mediaBreakpointUp('xs')} {
    flex-direction: column;
  }
  
  ${mediaBreakpointUp('md')} {
    flex-direction: column;
    padding: ${vw(96)};
  }
  
  ${mediaBreakpointUp('lg')} {
    flex-direction: ${({swiper}) => swiper ? `column` :  `row`};
  }
`;

export const ContainerWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${vw(40, 'xs')};
  
  ${mediaBreakpointUp('md')} {
    margin-bottom: ${vw(60, 'md')};
  }
  
  ${mediaBreakpointUp('lg')} {
    margin-bottom: 0;
  }
  
`;

export const ContainerWrapperTopBtns = styled.div`
  display: flex;
  flex-direction: row;
  
  margin: auto 0 auto auto;
  
  & > div:first-of-type {
    transform: rotate(180deg);
    margin-right: ${vw(24)};
  }
`;

export const ContainerWrapperTopTitle = styled.div`
  ${font('title2')};
  
  ${mediaBreakpointUp('lg')} {
    min-width: ${vw(408)};
    margin-right: ${vw(264)};
  }
`;

export const ContainerWrapperSection = styled.div`
  width: 100%;
`;
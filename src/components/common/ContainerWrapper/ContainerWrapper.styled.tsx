import styled from "styled-components";
import { color, font, mediaBreakpointDown, mediaBreakpointUp, vw } from '@/style/mixins';

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
  
  ${mediaBreakpointUp('xl')} {
    flex-direction: ${({swiper}) => swiper ? `column` :  `row`};
  }
`;

export const ContainerWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  
  ${mediaBreakpointDown('lg')} {
    margin-bottom: ${vw(40, 'md')};
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
  min-width: ${vw(408)};
  ${font('title2')};
  margin-right: ${vw(264)};
`;

export const ContainerWrapperSection = styled.div`
  width: 100%;
`;
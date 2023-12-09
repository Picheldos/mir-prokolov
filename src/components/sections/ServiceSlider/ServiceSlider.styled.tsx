import styled from 'styled-components';
import { color, font, mediaBreakpointDown, mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.div`
  margin-top: ${vw(96)};
  
  
  .swiper-slide-active > div {
    transform: scale(1);
  }
  
`;

export const ServiceSliderSlide = styled.div`
  display: flex;  
  position: relative;
  
  transition: transform 0.5s ease-in-out;
  
  transform: scale(0.55);
  width: 100%;
  height: ${vw(250, 'xs')};
  
  padding: ${vw(60)} ${vw(48)};
  
  border-radius: 20px;
  
  img {
    z-index: -1;
    overflow: hidden;
    border-radius: 20px;
  }
  
  
  ${mediaBreakpointUp(('md'))} {
    width: ${vw(430, 'md')};
    height: ${vw(250, 'md')};
  }
  
  ${mediaBreakpointUp('lg')} {  
    width: ${vw(983)};
    height: ${vw(576)};
    transform: scale(0.67);
    
  }
`;

export const ServiceSliderSlideText = styled.div`
  color: ${color('white')};
  margin-top: auto;
  
  text-shadow: 0 4px 8px #00000040;

  
  width: ${vw(770)};

  h3 {
    ${font('title3')};
  }
  
  p {
    ${font('text2')};
    margin: 0;
    padding: ${vw(24)} 0;
  }
  
  ${mediaBreakpointDown('lg')} {
   width: 100%;
  }
`;
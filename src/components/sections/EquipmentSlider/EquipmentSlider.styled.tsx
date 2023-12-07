export const Container = styled.div`
  position: relative;
  min-height: calc(100vh - ${vw(192)});
  
  
  ${mediaBreakpointDown('lg')} {
    min-height: auto;
  }
  
  ${Arrow} {
    position: absolute;
    right: ${vw(24)};
    top: ${vw(206)};
    z-index: 3;
    background-color: ${color('white')};
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;
    &:hover {
      opacity: 1;
    }
    
    svg {
      
      path {
        stroke: ${color('black')};
      }
    } 
    
  }
  
  .swiper {
    width: ${vw(1056)};
    ${mediaBreakpointDown('lg')} {
      width: 100%;
    }
    
  }
  
  .swiper-slide {
    opacity: 0!important;
    transition: opacity 0.5s ease-in-out;
    &.swiper-slide-active {
      opacity: 1!important;
    }
  }
`;
import styled from 'styled-components';
import { color, mediaBreakpointDown, vw } from '@/style/mixins';

import { Container as Arrow } from '@/components/ui/ArrowButton/ArrowButton.styled';

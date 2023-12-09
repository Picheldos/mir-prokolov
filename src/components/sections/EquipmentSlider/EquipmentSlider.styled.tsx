import styled from 'styled-components';
import { color, mediaBreakpointUp, vw } from '@/style/mixins';
import { Container as Arrow } from '@/components/ui/ArrowButton/ArrowButton.styled';

export const Container = styled.div`
  position: relative;  
  
  ${mediaBreakpointUp('lg')} {
    min-height: calc(100vh - ${vw(192)});
  }
  
  ${Arrow} {
    position: absolute;
    right: ${vw(12, 'xs')};
    top: ${vw(80, 'xs')};
    z-index: 3;
    
    background-color: ${color('white')};
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;
    
    &:hover {
      opacity: 1;
    }
    
    ${mediaBreakpointUp('md')} {
      top: ${vw(120, 'md')};
      right: ${vw(18, 'md')};
    }
    
    ${mediaBreakpointUp('lg')} {
      top: ${vw(206)};
      right: ${vw(24)};
    }
    
    svg {
      path {
        stroke: ${color('black')};
      }
    } 
    
  }
  
  .swiper {
    width: 100%;
    ${mediaBreakpointUp('lg')} {
      width: ${vw(1056)};
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


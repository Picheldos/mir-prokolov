import styled from 'styled-components';
import { font, mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.div<{inView: boolean}>`
  display: flex;
  flex-direction: column;
  width: 90%;
  
  ${({inView}) => inView ? `
      opacity: 1;
      transform: translateY(0);
    ` : `
      opacity: 0;
      transform: translateY(${vw(100)});
  `};
  
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  
  &:not(:last-child) {
      margin-bottom: ${vw(70, 'xs')};
      
      ${mediaBreakpointUp('md')} {
        margin-bottom: ${vw(100, 'md')};
      }
      
      ${mediaBreakpointUp('lg')} {
        margin-bottom: ${vw(192)};
      }
  }
    
  ${mediaBreakpointUp('lg')} {
      width: ${vw(680, 'xxl')};
  }
  
  ${mediaBreakpointUp('fhd')} {
      width: ${vw(864)};
  }
`;

export const AdvantageItemTop = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  margin-bottom: ${vw(15, 'xs')};
  
  ${mediaBreakpointUp('md')} {
      margin-bottom: ${vw(18, 'md')};
  }
    
  ${mediaBreakpointUp('lg')} {
      margin-bottom: ${vw(24)};
  }
  
  h3 {
    ${font('bigText')};
    width: fit-content;
    margin-left: ${vw(24)};
  }
  
  svg {
    width: ${vw(20, 'xs')};
    height: ${vw(20, 'xs')};
    
    ${mediaBreakpointUp('md')} {
      width: ${vw(28, 'md')};
      height: ${vw(28, 'md')};
    }
    
    ${mediaBreakpointUp('lg')} {
      width: ${vw(48)};
      height: ${vw(48)};
    }
    
    path {
      width: 100%;
      height: 100%;
    }
  }
`;

export const AdvantageItemText = styled.div`
  display: flex;
  flex-direction: row;
  
  ${font('text')};
  
  ul li:before {
    top: ${vw(5, 'xs')};
    
    ${mediaBreakpointUp('md')} {
      top: ${vw(11, 'md')};
    }
    
    ${mediaBreakpointUp('lg')} {
      top: ${vw(17)};
    }
    
  }
`;


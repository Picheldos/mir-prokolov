import styled from 'styled-components';
import { font, mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.div<{inView: boolean}>`
  display: flex;
  flex-direction: column;
  
  width: ${vw(864)};
  
  ${({inView}) => inView ? `
      opacity: 1;
      transform: translateY(0);
    ` : `
      opacity: 0;
      transform: translateY(${vw(100)});
  `};
  
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  
  &:not(:last-child) {
      margin-bottom: ${vw(192)};
      
      ${mediaBreakpointDown('lg')} {
        margin-bottom: ${vw(100, 'md')};
      }
      
      ${mediaBreakpointDown('md')} {
        margin-bottom: ${vw(70, 'xs')};
      }
  }
  
  ${mediaBreakpointDown('fhd')} {
    width: ${vw(660, 'xxl')};
  }
  
  ${mediaBreakpointDown('lg')} {
    width: fit-content;
  }
  
  ${mediaBreakpointDown('lg')} {
    width: 90%;
  }
`;

export const AdvantageItemTop = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  margin-bottom: ${vw(24)};
  
  h3 {
    ${font('bigText')};
    margin-left: ${vw(24)};
  }
  
  svg {
    width: ${vw(48)};
    height: ${vw(48)};
    
    ${mediaBreakpointDown('lg')} {
      width: ${vw(28, 'md')};
      height: ${vw(28, 'md')};
    }
    
    ${mediaBreakpointDown('md')} {
      width: ${vw(20, 'xs')};
      height: ${vw(20, 'xs')};
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
    top: ${vw(17)}
  }
  

`;


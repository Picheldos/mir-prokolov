import styled from "styled-components";
import { font, mediaBreakpointDown, mediaBreakpointUp, vw } from '@/style/mixins';
import {Container as TextItem} from '../../blocks/AdvantageItem/AdvantageItem.styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  
  p {
    margin: 0;
  }
  
  ${mediaBreakpointUp('lg')} {
    height: calc(100vh - ${vw(192)});
  }
`;

export const AboutSectionTitle = styled.div`
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
  width: 100%;
  
  ${font('bigText')};
  opacity: 1;
  
  span {
    font-weight: 600;
  }
  
  ${mediaBreakpointUp('lg')} {
    width: ${vw(620, 'xxl')};
  }
  
  ${mediaBreakpointUp('xxl')} {
    width: ${vw(768)};
  }

`;

export const AboutSectionText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${vw(120, 'md')};
  
  
  ${mediaBreakpointUp('lg')} {
     margin-top: auto;
  }
  
  ${TextItem} {
    ${mediaBreakpointDown('lg')} {
        width: ${vw(600, 'md')}; 
    }
    
    &:not(:last-of-type) {
      margin-left: auto;
      
      margin-bottom: ${vw(48, 'xs')}; 
      
      ${mediaBreakpointUp('lg')} {
        margin-bottom: ${vw(48, 'md')}; 
      }
      
      
      ${mediaBreakpointUp('lg')} {
        margin-bottom: ${vw(36, 'xxl')};
      }
      
      ${mediaBreakpointUp('xxl')} {
        margin-bottom: ${vw(72)};
      }
    }
  }
`;
import styled from "styled-components";
import { font, mediaBreakpointDown, vw } from '@/style/mixins';
import {Container as TextItem} from '../../blocks/AdvantageItem/AdvantageItem.styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  height: calc(100vh - ${vw(192)});
  
  p {
    margin: 0;
  }
  
  ${mediaBreakpointDown('lg')} {
    height: auto;
  }
`;

export const AboutSectionTitle = styled.div`
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
  
  ${font('bigText')};
  width: ${vw(768)};
  span {
    font-weight: 600;
  }
  opacity: 1;
  
  ${mediaBreakpointDown('fhd')} {
    width: ${vw(620, 'xxl')};
  }
  
  ${mediaBreakpointDown('lg')} {
    width: 100%; 
  }

`;

export const AboutSectionText = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-top: auto;
  
  ${mediaBreakpointDown('lg')} {
    margin-top: ${vw(120, 'md')}; 
  }
  
  ${TextItem} {
    ${mediaBreakpointDown('lg')} {
        width: ${vw(600, 'md')}; 
    }
    &:not(:last-of-type) {
      margin-left: auto;
      margin-bottom: ${vw(72)};
      ${mediaBreakpointDown('fhd')} {
        margin-bottom: ${vw(36, 'xxl')};
      }
      
      ${mediaBreakpointDown('lg')} {
        margin-bottom: ${vw(48, 'md')}; 
      }
      
      
    }
  }
`;
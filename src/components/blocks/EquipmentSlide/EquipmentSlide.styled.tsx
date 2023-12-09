import styled from 'styled-components';
import { color, font, mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EquipmentSlideImage = styled.div`
  position: relative;
  width: 100%;
  
  height: ${vw(180, 'xs')};
  margin-bottom: ${vw(20, 'xs')};
  
  img {
    border-radius: 20px;
  }
  
  ${mediaBreakpointUp('md')} {
      height: ${vw(300, 'md')};
      margin-bottom: ${vw(20, 'md')};
  }
  
  ${mediaBreakpointUp('lg')} {
    height: ${vw(456)};
    margin-bottom: ${vw(24)};
  }
`;

export const EquipmentSlideTitle = styled.div`
  ${font('title2')};
  
  margin-bottom: ${vw(12, 'xs')};
  
  ${mediaBreakpointUp('md')} {
      margin-bottom: ${vw(15, 'md')};
  }
  
  ${mediaBreakpointUp('lg')} {
    margin-bottom: ${vw(40)};
  }
  
`;

export const EquipmentSlideDescription = styled.div`
  display: flex;
  flex-direction: column;
  
  ${font('text2')};
  
  p {
    margin: 0;
  }
  
  span {
    color: ${color('darkgray')};
    font-weight: 300;
  }
  
  h3 {
    ${font('text5')};
  }
  
`;

export const EquipmentSlideDescriptionBlock = styled.div`
  &:not(:last-of-type) {
    margin-bottom: ${vw(15, 'xs')};
    
    ${mediaBreakpointUp('md')} {
      margin-bottom: ${vw(20, 'md')};
    }
  
    ${mediaBreakpointUp('lg')} {
      margin-bottom: ${vw(28)};
    }
  }
  
  h3 {
    margin-bottom: 10px;
  }
`;
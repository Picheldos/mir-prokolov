import styled from 'styled-components';
import { color, font, mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EquipmentSlideImage = styled.div`
  position: relative;
  width: 100%;
  height: ${vw(456)};
  
  margin-bottom: ${vw(24)};
  
  img {
    border-radius: 20px;
  }
  
  ${mediaBreakpointDown('lg')} {
      height: ${vw(300, 'md')};
  }
`;

export const EquipmentSlideTitle = styled.div`
  margin-bottom: ${vw(40)};
  ${font('title2')};
  
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
    margin-bottom: ${vw(28)};
  }
`;
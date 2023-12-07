import styled from 'styled-components';
import { color, font, mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100vh;
  padding: 0 ${vw(96)};
  
  background: ${color('orange')};
  color: ${color('white')}
`;

export const ContactsSectionTitle = styled.div`
  margin-top: ${vw(264)};
  margin-bottom: ${vw(72)};
  ${font('title')};
`;

export const ContactsSectionInfo = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  
  ${mediaBreakpointDown('md')} {
    flex-direction: column;
    height: 100%;
  }
`;

export const ContactsSectionInfoLeft = styled.div`
  width: ${vw(768)};
  display: flex;
  flex-direction: column;
  
  ${font('text')};
  
  
  ${mediaBreakpointDown('md')} {
    width: 100%;
  }
  
  div, a {
    margin-bottom: ${vw(20)};
  }
  
  a {
    width: fit-content;
    
   transition: color 0.6s ease-in-out;
    &:hover {
      color: ${color('black', 0.5)};
    }
  }
`;

export const ContactsSectionInfoRight = styled.div`
  width: ${vw(768)};
  display: flex;
  flex-direction: column;
  
  ${font('text2')};
  font-weight: 300;
  
   ${mediaBreakpointDown('md')} {
    width: 100%;
    margin-top: auto;
  }
  
  div {
    margin-bottom: ${vw(20)};
    span {
      font-weight: 400;
    }
  }
`;

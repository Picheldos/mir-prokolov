import styled from 'styled-components';
import { color, font, mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100vh;
  
  
  background: ${color('orange')};
  color: ${color('white')};
  
  padding: ${vw(32, 'xs')} ${vw(18, 'xs')};
  
  ${mediaBreakpointUp('md')} {
    padding: ${vw(96)};
  }
  
  ${mediaBreakpointUp('lg')} {
    padding: ${vw(264)} ${vw(96)};
  }
`;

export const ContactsSectionTitle = styled.div`
  margin-bottom: ${vw(48, 'xs')};
  ${font('title')};
  
  ${mediaBreakpointUp('md')} {
    margin-bottom: ${vw(72, 'md')};
  }
  
  ${mediaBreakpointUp('lg')} {
    margin-bottom: ${vw(72)};
  }
`;

export const ContactsSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;
  justify-content: space-between;
  
  ${mediaBreakpointUp('lg')} {
    flex-direction: row;
  }
`;

export const ContactsSectionInfoLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  ${font('text')};
  
  
  ${mediaBreakpointUp('lg')} {
    width: ${vw(768)};
  }
  
  div, a {
    margin-bottom: 10px;
    
    ${mediaBreakpointUp('lg')} {
      margin-bottom: ${vw(20)};
    }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  
  ${font('text2')};
  font-weight: 300;
  
  ${mediaBreakpointUp('lg')} {
    width: ${vw(768)};
  }
  
  div {
    margin-bottom: ${vw(20)};
    span {
      font-weight: 400;
    }
  }
`;

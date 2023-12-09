import styled from 'styled-components';
import { color, font, mediaBreakpointDown, vw } from '@/style/mixins';

export const Container = styled.header<{visible: boolean; contrast: boolean}>`
  
    position: fixed;
    left: 0;
    right: 0;
    z-index: 5;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${vw(24)} ${vw(48)};
    
    transform: ${({visible, contrast}) => visible || contrast ? 'translateY(0)' : 'translateY(-100px)'};
    transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out;    
    
     ${({contrast}) => contrast ? `
        background: ${color('orange')};
        color: ${color('white')};
        span {
            background: ${color('black')}!important;
        }
      ` : `
        background: ${color('white')};
      `}
     
    ${mediaBreakpointDown('md')} {
      padding: ${vw(12, 'xs')} ${vw(18, 'xs')};
      overflow-x: scroll;
      
      ::-webkit-scrollbar {
            width: 0;
            height: 0;
      }
    } 
`;

export const HeaderLogo = styled.div`
  svg {
    width: ${vw(208)};
    height: ${vw(48)};
  }
  
  ${mediaBreakpointDown('md')} {
    display: none;
  }
    
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${vw(512)};
  ${mediaBreakpointDown('md')} {
    margin-left: 0;
  }
`;

export const HeaderLink = styled.div`
  margin-right: 24px;
  ${font('link')};
  
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: ${'orange'};
    cursor: pointer;
  }
`;
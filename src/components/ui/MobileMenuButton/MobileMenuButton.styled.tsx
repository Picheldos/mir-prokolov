import styled from 'styled-components';
import { color, vw } from '@/style/mixins';

export const Container = styled.div<{showed: boolean; contrast: boolean}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10;
  top: ${vw(22, 'xs')};
  right: ${vw(12, 'xs')};
  
  span {
    width: 30px;
    height: 3px;
    border-radius: 3px;
    
    margin-bottom: 3px;
    
    background-color: ${({contrast}) => contrast ? color('black') : color('orange')};
    
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.5s ease-in-out;
    
    ${({showed}) => showed && `
        &:first-child {
            transform: rotate(45deg) translateY(8px);
        }
        &:nth-child(2n) {
            opacity: 0;
        }
        &:last-child {
            transform: rotate(-45deg) translateY(-9px);
        }
    `}
  }
`;
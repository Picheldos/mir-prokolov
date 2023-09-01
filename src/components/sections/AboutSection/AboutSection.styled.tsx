import styled from "styled-components";
import {font, vw} from "@/style/mixins";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  
  p {
    margin: 0;
  }
`;

export const AboutSectionText = styled.div`
  ${font('text')};
  width: ${vw(864)};

  &:first-of-type {
    ${font('bigText')};
    // width: ${vw(720)};
    margin-bottom: ${vw(139)};
    span {
      font-weight: 600;
    }
  }
  
  &:nth-child(2n) {
    margin-left: auto;
        margin-top: auto;

    margin-bottom: ${vw(72)};
  }
`;
import styled from "styled-components";
import {color, font, fontFamily, vw} from "@/style/mixins";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  padding: ${vw(96)};
  height: 100vh;
  color: ${color('black')};
`;

export const ContainerWrapperTitle = styled.div`
  min-width: ${vw(408)};
  ${font('title2')};
  margin-right: ${vw(264)};
`;

export const ContainerWrapperSection = styled.div`
  width: 100%;
`;
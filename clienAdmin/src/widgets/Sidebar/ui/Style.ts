import {
  navbar_heigth,
  sidebar_width,
} from "@/app/styles/variaable/global.style";
import styled from "styled-components";

export default styled.div`
  height: calc(100vh - ${navbar_heigth});
  width: ${sidebar_width};
  position: relative;
  transition: width 0.3s;
`;

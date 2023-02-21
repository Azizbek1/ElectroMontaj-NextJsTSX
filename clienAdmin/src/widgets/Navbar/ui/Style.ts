import { navbar_heigth } from "@/app/styles/variaable/global.style";
import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: ${navbar_heigth};
  display: flex;
  align-items: center;
  padding: 20px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 3%), 0 1px 6px -1px rgb(0 0 0 / 2%),
    0 2px 4px 0 rgb(0 0 0 / 2%);
  z-index: 999;
  position: relative;
`;

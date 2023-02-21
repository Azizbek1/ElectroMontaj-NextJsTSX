import { createGlobalStyle } from "styled-components";
import { Fragment } from "react";
import { font_family_main, font_m } from "./variaable/global.style";

type IChildren = JSX.Element | JSX.Element[] | string;
const Style = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    body{
        font-family: ${font_family_main};
    }
    .content-page{
      display: flex;
    }
    .page-wrapper{
      flex-grow: 1;
      padding: 20px;
    }
    .app{
      font: ${font_m};
      min-height: 100vh;
    }
`;
interface Props {
  children: IChildren;
}
const ProjectGlobalStyle: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <Style />
      {children}
    </Fragment>
  );
};
export default ProjectGlobalStyle;

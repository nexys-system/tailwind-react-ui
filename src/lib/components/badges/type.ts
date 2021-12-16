import { ContextColor, ContextColorString } from "../type";

export interface Style {
  color: ContextColor | ContextColorString;
}

export interface Props extends Partial<Style> {
  children: string | JSX.Element;
}

export default "snowpack";

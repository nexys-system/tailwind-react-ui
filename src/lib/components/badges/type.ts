import { ContextColor } from "../type";
import { IconProps } from "../../icons/type";

export interface Style {
  color: ContextColor;
}

export interface Props extends Partial<Style> {
  children: string | JSX.Element;
}

import { ContextColor } from "../type";
import { IconProps } from "../../../lib/icons/type";

export interface Style {
  color: ContextColor | ContextColorString;
}

export interface Props extends Partial<Style> {
  children: string | JSX.Element;
  Icon?: (p: IconProps) => JSX.Element;
  dismissible?: boolean;
  onClick?: () => void;
}

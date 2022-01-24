import {
  ContextBorderRadius,
  ContextBorderRadiusString,
  ContextColor,
  ContextColorString,
} from "../type";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonStyle {
  color: ContextColor;
  rounded?: ContextBorderRadius | ContextBorderRadiusString;
  textColor: ContextColor | ContextColorString;
  variant: "filled" | "transparent";
}

export interface ButtonProps extends Partial<ButtonStyle> {
  id?: number | string;
  disabled?: boolean;
  children: JSX.Element | string | number;
  onClick?: (id?: number | string) => void;
  type?: ButtonType;
  isLoading?: boolean;
}

export default "snowpack";

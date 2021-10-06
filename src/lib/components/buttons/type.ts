import { ContextColor } from "../type";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonStyle {
  color: ContextColor;
  //shade: number;
  textColor: ContextColor;
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

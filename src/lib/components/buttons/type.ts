export type ButtonType = "button" | "submit" | "reset";

export interface ButtonStyle {
  color: string;
  shade: number;
  textColor: string;
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

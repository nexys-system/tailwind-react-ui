import {
  ContextBorderRadius,
  ContextBorderRadiusString,
  ContextColor,
  ContextColorString,
} from "../type";

export type ButtonType = "button" | "submit" | "reset";

export interface PillStyle {
  color: ContextColor | ContextColorString;
  rounded?: ContextBorderRadius | ContextBorderRadiusString;
}

export interface PillProps extends Partial<PillStyle> {
  id?: number | string;
  title: string;
  disabled?: boolean;
  onSelect: (id?: number | string) => void;
  badge?: string | JSX.Element;
  fullWidth?: boolean;
  selected: boolean;
}

export default "snowpack";

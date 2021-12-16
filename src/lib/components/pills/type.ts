import { ContextColor } from "../type";

export type ButtonType = "button" | "submit" | "reset";

export interface PillStyle {
  color: ContextColor;
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

/**
 * interface Props {
  id: number;
  title: string;
  badge?: string | JSX.Element;
  selected?: boolean;
  onSelect?: (s: number) => void;
  color?: "sky" | "rose" | "purple" | "blue" | "coolGray";
  darkColor?: "sky" | "rose" | "purple" | "blue" | "coolGray" | "white";
  fullWidth?: boolean;
}
 */

export default "snowpack";

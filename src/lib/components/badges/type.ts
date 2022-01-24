import {
  ContextColor,
  ContextColorString,
  ContextBorderRadius,
  ContextBorderRadiusString,
} from "../type";

export interface Style {
  color: ContextColor | ContextColorString;
  rounded?: ContextBorderRadius | ContextBorderRadiusString;
}

export interface Props extends Partial<Style> {
  children: string | JSX.Element;
}

export default "snowpack";

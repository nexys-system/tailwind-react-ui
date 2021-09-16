// add React.SVGAttributes ?
// see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1349b640d4d07f40aa7c1c6931f18e3fbf667f3a/types/react/index.d.ts#L2341

export type StrokeLinecap = "inherit" | "round" | "butt" | "square" | undefined;
export type StrokeLinejoin = "inherit" | "round" | "miter" | "bevel" | undefined;

export interface IconProps {
  className?: string;
  svgProps?: React.SVGAttributes<any>;
}

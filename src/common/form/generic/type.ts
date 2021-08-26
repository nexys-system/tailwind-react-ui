export type TypeUnit = "string" | "number" | "category";

export interface StructureUnit<A> {
  name: keyof A;
  label: string;
  type?: TypeUnit;
  options?: { id: number; name: string }[];
}

export interface FormProps<A> {
  data: Partial<A>;
  structure: StructureUnit<A>[];
  errors?: { [k in keyof A]?: string[] };
  onSubmit: (data: Partial<A>) => Promise<void>;
}

export interface ToggleProps<A> {
  def: FormDef<A>[];
  data: A;
  onSubmit: (data: A) => Promise<any>;
  View: (props: { data: A }) => JSX.Element;
}

export enum FormType {
  Number,
  Text,
  Select,
  Switch,
}

export interface FormDef<A> {
  name: keyof A;
  label?: string;
  uiType: FormType;
  optional: boolean;
  options?: { id: number | string; name: string }[];
  hide?: boolean;
  disabled?: boolean;
}

export interface GeneratorProps<A> {
  formDef: any[];
  errors: any;
  data: A;
  setData: (d: A) => void;
  isLoading: boolean;
}

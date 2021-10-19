// todo this is defined twice, remove one of the two
export interface OptionSet<A> {
  id: A;
  name: string;
}

/**
 * generic input props
 */
export interface InputProps<A> {
  onChange: (v: A | undefined) => void;
  value?: A;
  errors?: string[];
  disabled?: boolean;
  placeholder?: string;
}

/**
 * select props for dropdowns that return either a string or number (ie. enum)
 */
export type InputTypeString = "text" | "email" | "password";

/**
 * select props for dropdowns that return an option set
 */
export type InputType = InputTypeString | "number";

export interface SelectProps<A> extends InputProps<A> {
  options: OptionSet<A>[];
}

export interface SelectOptionSetProps<A> extends InputProps<OptionSet<A>> {
  options: OptionSet<A>[];
}

// from src/form
export enum FormType {
  Number,
  Text,
  Textarea,
  Toggle,
  Select,
  SelectString,
  SelectOptionSet,
  Datepicker,
}

export interface FormDef<A> {
  name: keyof A;
  label?: string;
  uiType: FormType;
  optional: boolean;
  options?: OptionSet<number | string>[];
}

/**
 * this interface extends the FormDef and gives more information for "view" component
 */
// export type FormDefWView<A> = FormDef<A> & DefinitionItem<A>;

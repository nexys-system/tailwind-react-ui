import { DefinitionItem } from "@nexys/core-list/dist/types";

export interface OptionSet<Id> {
  name: string;
  id: Id;
}

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
export type FormDefWView<A> = FormDef<A> & DefinitionItem<A>;

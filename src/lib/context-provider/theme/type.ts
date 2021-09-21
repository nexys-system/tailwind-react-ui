export interface Data {
  theme: "dark" | "light";
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Theme = "THEME",
}

export type Payload = {
  [Types.Theme]: "light" | "dark";
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

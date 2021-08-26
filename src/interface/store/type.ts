export interface Data {
  message?: {
    message: string;
    type?: "success" | "error" | "warning" | "info";
  };
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
  Message = "MESSAGE",
  Theme = "THEME",
  SurveyInit = "SURVEY_INIT",
  SurveyAnswer = "SURVEY_ANSWER",
}

export type Payload = {
  [Types.Message]: {
    message: string;
    type?: "error" | "success" | "info" | "warning";
  };
  [Types.Theme]: "light" | "dark";
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

import * as RT from "./type";

export const reducer = (data: RT.Data, action: RT.Actions) => {
  switch (action.type) {
    case RT.Types.Message:
      return { ...data, message: action.payload };
    case RT.Types.Theme:
      return { ...data, theme: action.payload };

    default:
      return data;
  }
};

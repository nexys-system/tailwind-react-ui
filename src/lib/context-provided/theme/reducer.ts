import * as RT from "./type";

export const reducer = (data: RT.Data, action: RT.Actions) => {
  switch (action.type) {
    case RT.Types.Theme:
      return { ...data, theme: action.payload };

    default:
      return data;
  }
};

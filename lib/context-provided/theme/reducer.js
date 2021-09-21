import * as RT from "./type.js";
export const reducer = (data, action) => {
  switch (action.type) {
    case RT.Types.Theme:
      return {...data, theme: action.payload};
    default:
      return data;
  }
};

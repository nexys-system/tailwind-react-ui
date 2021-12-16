import UI from "./ui";
export * as Labels from "./labels";
export * as Utils from "./utils";

// this fails because the browser tries to load an empty file
//export * as Type from "./type";
import Calendar from "./calendar";

export { Calendar, UI };

export default UI;

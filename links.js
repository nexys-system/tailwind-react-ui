import Alerts from "./app/components/alerts.js";
import Buttons from "./app/components/buttons.js";
import Badge from "./app/components/badge.js";
import Card from "./app/components/card.js";
import Dropdowns from "./app/components/dropdowns.js";
import Spinner from "./app/components/spinners.js";
import TextInput from "./app/form/text.js";
import NumberInput from "./app/form/number.js";
import BooleanInput from "./app/form/switch.js";
export const links = {
  home: {name: "Home", link: "/"}
};
export const components = [
  {name: "Alerts", link: "/alerts", Component: Alerts},
  {name: "Buttons", link: "/buttons", Component: Buttons},
  {name: "Badge", link: "/badge", Component: Badge},
  {name: "Card", link: "/card", Component: Card},
  {name: "Dropdowns", link: "/dropdown", Component: Dropdowns},
  {name: "Spinners", link: "/spinner", Component: Spinner}
];
export const formComponents = [
  {name: "Text Input", link: "/text-input", Component: TextInput},
  {name: "Number Input", link: "/number-input", Component: NumberInput},
  {name: "Select Input", link: "/select-input", Component: Buttons},
  {name: "Switch", link: "/switch", Component: BooleanInput}
];
export const menus = Object.values(links);
export default links;

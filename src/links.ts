import Alerts from "./app/components/alerts";
import Buttons from "./app/components/buttons";
import Badge from "./app/components/badge";
import Card from "./app/components/card";
import Dropdowns from "./app/components/dropdowns";
import Spinner from "./app/components/spinners";
import Icons from "./app/components/icons";

import TextInput from "./app/form/text";
import NumberInput from "./app/form/number";
import BooleanInput from "./app/form/switch";

interface MenuItem {
  name: string;
  link: string;
}

export const links: { [k: string]: MenuItem } = {
  home: { name: "Home", link: "/" },
};

export const components: (MenuItem & { Component: () => JSX.Element })[] = [
  { name: "Alerts", link: "/alerts", Component: Alerts },
  { name: "Buttons", link: "/buttons", Component: Buttons },
  { name: "Badge", link: "/badge", Component: Badge },
  { name: "Card", link: "/card", Component: Card },
  { name: "Dropdowns", link: "/dropdown", Component: Dropdowns },
  { name: "Spinners", link: "/spinner", Component: Spinner },
  { name: "Icons", link: "/icons", Component: Icons },
];

export const formComponents: (MenuItem & { Component: () => JSX.Element })[] = [
  { name: "Text Input", link: "/text-input", Component: TextInput },
  { name: "Number Input", link: "/number-input", Component: NumberInput },
  { name: "Select Input", link: "/select-input", Component: Buttons },
  { name: "Switch", link: "/switch", Component: BooleanInput },
];

export const menus: MenuItem[] = Object.values(links);

export default links;

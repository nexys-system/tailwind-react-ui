import Alerts from "./app/components/alerts";
import Buttons from "./app/components/buttons";
import Badge from "./app/components/badge";
import Card from "./app/components/card";
import Dropdowns from "./app/components/dropdowns";
import Pill from "./app/components/pill";
import Spinner from "./app/components/spinners";
import Icons from "./app/components/icons";
import Table from "./app/components/table";
import Code from "./app/components/code";
import Typography from "./app/components/typography";
import DataLoad from "./app/components/data-load";
import TextInput from "./app/form/text";
import NumberInput from "./app/form/number";
import BooleanInput from "./app/form/switch";
import SelectInput from "./app/form/select";
import Checkbox from "./app/form/checkbox";
import Rating from "./app/form/rating";
import DeleteRedirect from "./app/components/delete";
import Edit from "./app/components/edit";

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
  { name: "Data Load", link: "/data-load", Component: DataLoad },
  { name: "Delete", link: "/delete", Component: DeleteRedirect },
  { name: "Dropdowns", link: "/dropdown", Component: Dropdowns },
  { name: "Edit", link: "/edit", Component: Edit },
  // { name: "Inputs", link: "/inputs", Component: Inputs },
  { name: "Pill", link: "/pill", Component: Pill },
  { name: "Spinners", link: "/spinner", Component: Spinner },
  { name: "Icons", link: "/icons", Component: Icons },

  { name: "Table", link: "/table", Component: Table },
  { name: "Code", link: "/code", Component: Code },
  { name: "Typography", link: "/typography", Component: Typography },
];

export const formComponents: (MenuItem & { Component: () => JSX.Element })[] = [
  { name: "Text Input", link: "/text-input", Component: TextInput },
  { name: "Number Input", link: "/number-input", Component: NumberInput },
  { name: "Select Input", link: "/select-input", Component: SelectInput },
  { name: "Switch", link: "/switch", Component: BooleanInput },
  { name: "Checkbox", link: "/checkbox", Component: Checkbox },
  { name: "Rating", link: "/rating", Component: Rating },
];

export const menus: MenuItem[] = Object.values(links);

export default links;

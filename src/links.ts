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
import Tabs from "./app/components/tabs";
import Toggle from "./app/components/toggle";
import View from "./app/components/view";
import FormGenerator from "./app/form/generator";
import TextareaInput from "./app/form/textarea";
import List from "./app/components/list";
import Detail from "./app/components/detail";
import Crud from "./app/components/crud";
import Misc from "./app/components/misc";
import Modal from "./app/components/modal";
import Link from "./app/components/link";
// import Stepper from "./app/components/stepper";

import Snippet from "./app/components/snippet";
import ContextNotification from "./app/components/context/notification";

import Color from "./app/general/color";
import Border from "./app/general/border-radius";

import FormWrapper from "./app/form/wrapper";

interface MenuItem {
  name: string;
  link: string;
}

export const links: { [k: string]: MenuItem } = {
  home: { name: "Home", link: "/" },
};

export const components: (MenuItem & {
  Component: () => JSX.Element;
  exact?: boolean;
})[] = [
  { name: "Alerts", link: "/alerts", Component: Alerts },
  { name: "Buttons", link: "/buttons", Component: Buttons },
  { name: "Badge", link: "/badge", Component: Badge },
  { name: "Card", link: "/card", Component: Card },
  { name: "Code", link: "/code", Component: Code },
  { name: "Dropdowns", link: "/dropdown", Component: Dropdowns },
  { name: "Modal", link: "/modal", Component: Modal },
  { name: "Icons", link: "/icons", Component: Icons },
  { name: "Pill", link: "/pill", Component: Pill },
  { name: "Spinners", link: "/spinner", Component: Spinner },
  { name: "Typography", link: "/typography", Component: Typography },
  { name: "Snippets", link: "/snippets", Component: Snippet },
  { name: "Misc", link: "/misc", Component: Misc },
  { name: "Links", link: "/link", Component: Link },
  { name: "Context", link: "/context", Component: ContextNotification },
  // { name: "Stepper", link: "/stepper", Component: Stepper },
];

export const crud: (MenuItem & {
  Component: () => JSX.Element;
  exact?: boolean;
})[] = [
  { name: "Crud", link: "/crud", exact: false, Component: Crud },
  { name: "Data Load", link: "/data-load", Component: DataLoad },
  { name: "Delete", link: "/delete", Component: DeleteRedirect },
  { name: "Detail", link: "/detail", Component: Detail },
  { name: "Edit", link: "/edit", Component: Edit },
  { name: "List", link: "/list", Component: List },
  { name: "Table", link: "/table", Component: Table },
  { name: "Tabs", link: "/tabs", exact: false, Component: Tabs },
  { name: "Toggle", link: "/toggle", Component: Toggle },
  { name: "View", link: "/view", Component: View },
];

export const formComponents: (MenuItem & { Component: () => JSX.Element })[] = [
  { name: "Text Input", link: "/text-input", Component: TextInput },
  { name: "Number Input", link: "/number-input", Component: NumberInput },
  { name: "Select Input", link: "/select-input", Component: SelectInput },
  { name: "Switch", link: "/switch", Component: BooleanInput },
  { name: "Checkbox", link: "/checkbox", Component: Checkbox },
  { name: "Rating", link: "/rating", Component: Rating },
  { name: "Form Generator", link: "/form-generator", Component: FormGenerator },
  { name: "Textarea", link: "/textarea", Component: TextareaInput },
  { name: "Wrapper", link: "/wrapper", Component: FormWrapper },
];

export const specs: (MenuItem & { Component: () => JSX.Element })[] = [
  { name: "Color", link: "/color", Component: Color },
  { name: "Border Radius", link: "/radius", Component: Border },
];

export const menus: MenuItem[] = Object.values(links);

export default links;

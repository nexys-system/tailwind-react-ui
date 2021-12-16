import Alerts from "./app/components/alerts.js";
import Buttons from "./app/components/buttons.js";
import Badge from "./app/components/badge.js";
import Card from "./app/components/card.js";
import Dropdowns from "./app/components/dropdowns.js";
import Pill from "./app/components/pill.js";
import Spinner from "./app/components/spinners.js";
import Icons from "./app/components/icons.js";
import Table from "./app/components/table.js";
import Code from "./app/components/code.js";
import Typography from "./app/components/typography.js";
import DataLoad from "./app/components/data-load.js";
import TextInput from "./app/form/text.js";
import NumberInput from "./app/form/number.js";
import BooleanInput from "./app/form/switch.js";
import SelectInput from "./app/form/select.js";
import Checkbox from "./app/form/checkbox.js";
import Rating from "./app/form/rating.js";
import DeleteRedirect from "./app/components/delete.js";
import Edit from "./app/components/edit.js";
import Tabs from "./app/components/tabs.js";
import Toggle from "./app/components/toggle.js";
import View from "./app/components/view.js";
import FormGenerator from "./app/form/generator/index.js";
import TextareaInput from "./app/form/textarea.js";
import List from "./app/components/list/index.js";
import Detail from "./app/components/detail.js";
import Crud from "./app/components/crud.js";
import Misc from "./app/components/misc.js";
import Snippet from "./app/components/snippet.js";
import ContextNotification from "./app/components/context/notification.js";
import FormWrapper from "./app/form/wrapper.js";
export const links = {
  home: {name: "Home", link: "/"}
};
export const components = [
  {name: "Alerts", link: "/alerts", Component: Alerts},
  {name: "Buttons", link: "/buttons", Component: Buttons},
  {name: "Badge", link: "/badge", Component: Badge},
  {name: "Card", link: "/card", Component: Card},
  {name: "Code", link: "/code", Component: Code},
  {name: "Crud", link: "/crud", exact: false, Component: Crud},
  {name: "Data Load", link: "/data-load", Component: DataLoad},
  {name: "Delete", link: "/delete", Component: DeleteRedirect},
  {name: "Detail", link: "/detail", Component: Detail},
  {name: "Dropdowns", link: "/dropdown", Component: Dropdowns},
  {name: "Edit", link: "/edit", Component: Edit},
  {name: "Icons", link: "/icons", Component: Icons},
  {name: "List", link: "/list", Component: List},
  {name: "Pill", link: "/pill", Component: Pill},
  {name: "Spinners", link: "/spinner", Component: Spinner},
  {name: "Table", link: "/table", Component: Table},
  {name: "Tabs", link: "/tabs", exact: false, Component: Tabs},
  {name: "Toggle", link: "/toggle", Component: Toggle},
  {name: "Typography", link: "/typography", Component: Typography},
  {name: "View", link: "/view", Component: View},
  {name: "Snippets", link: "/snippets", Component: Snippet},
  {name: "Misc", link: "/misc", Component: Misc},
  {name: "Context", link: "/context", Component: ContextNotification}
];
export const formComponents = [
  {name: "Text Input", link: "/text-input", Component: TextInput},
  {name: "Number Input", link: "/number-input", Component: NumberInput},
  {name: "Select Input", link: "/select-input", Component: SelectInput},
  {name: "Switch", link: "/switch", Component: BooleanInput},
  {name: "Checkbox", link: "/checkbox", Component: Checkbox},
  {name: "Rating", link: "/rating", Component: Rating},
  {name: "Form Generator", link: "/form-generator", Component: FormGenerator},
  {name: "Textarea", link: "/textarea", Component: TextareaInput},
  {name: "Wrapper", link: "/wrapper", Component: FormWrapper}
];
export const menus = Object.values(links);
export default links;

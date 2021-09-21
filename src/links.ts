import Alerts from "./app/components/alerts";
import Buttons from "./app/components/buttons";
import Badge from "./app/components/badge";
import Card from "./app/components/card";
import Dropdowns from "./app/components/dropdowns";
import Pill from "./app/components/pill";
import Spinner from "./app/components/spinners";
import Rating from "./app/components/rating";
import Inputs from "./app/components/inputs";

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
  { name: "Inputs", link: "/inputs", Component: Inputs },
  { name: "Pill", link: "/pill", Component: Pill },
  { name: "Spinners", link: "/spinner", Component: Spinner },
  { name: "Rating", link: "/rating", Component: Rating },
];

export const menus: MenuItem[] = Object.values(links);

export default links;

import React from "react";
import { Link } from "react-router-dom";

import { components, formComponents } from "../links";

const Sidebar = () => {
  return (
    <div className={"hidden sm:block"}>
      <h3 className={"ph-1 text-xl"}>Components</h3>
      <ul>
        {components.map((c, i) => (
          <li key={i} className="text-primary hover:text-primary-800">
            <Link to={c.link}>{c.name}</Link>
          </li>
        ))}
      </ul>
      <br />
      <h3 className={"ph-1 text-xl mt-10"}>Form</h3>
      <ul>
        {formComponents.map((c, i) => (
          <li key={i} className="text-primary hover:text-primary-800">
            <Link to={c.link}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

import { components, formComponents, crud, specs } from "../links";

const Sidebar = () => {
  return (
    <div
      className={
        "hidden sm:block bg-gray-50 w-64 p-5 pl-10 content-area overflow-scroll"
      }
    >
      <h3 className={"ph-1 text-xl"}>General</h3>
      <ul>
        {specs.map((c, i) => (
          <li key={i} className="text-primary hover:text-primary-800">
            <Link to={c.link}>{c.name}</Link>
          </li>
        ))}
      </ul>
      <br />
      <h3 className={"ph-1 text-xl mt-5"}>Components</h3>
      <ul>
        {components.map((c, i) => (
          <li key={i} className="text-primary hover:text-primary-800">
            <Link to={c.link}>{c.name}</Link>
          </li>
        ))}
      </ul>
      <br />
      <h3 className={"ph-1 text-xl"}>CRUD</h3>
      <ul>
        {crud.map((c, i) => (
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

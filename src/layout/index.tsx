import React from "react";

import { Link } from "react-router-dom";

import { components, formComponents } from "../links";

import Footer from "./footer";
import Header from "./header";

const nCols = 8;
const leftNCols = 1;
const rightNCols = nCols - leftNCols;

export default ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-4">
          <div className={"grid grid-cols-8 gap-4"}>
            <div className={"hidden sm:block"}>
              <h3 className={"ph-1 text-xl"}>Components</h3>
              <ul>
                {components.map((c, i) => (
                  <li key={i} className="text-primary hover:text-primary-800">
                    <Link to={c.link}>{c.name}</Link>
                  </li>
                ))}
              </ul>
              <h3 className={"ph-1 text-xl"}>Form</h3>
              <ul>
                {formComponents.map((c, i) => (
                  <li key={i} className="text-primary hover:text-primary-800">
                    <Link to={c.link}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={"col-span-" + rightNCols}>{children}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

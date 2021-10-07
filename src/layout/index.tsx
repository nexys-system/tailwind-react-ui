import React from "react";

import { Link } from "react-router-dom";

import { components, formComponents } from "../links";

import Footer from "./footer";
import Header from "./header";

const nCols = 8;
const leftNCols = 1;
const rightNCols = nCols - leftNCols;

// col-span-7 col-span-8
export default ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col h-screen justify-between font-extralight">
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
            <div className={"col-span-" + rightNCols}>{children}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

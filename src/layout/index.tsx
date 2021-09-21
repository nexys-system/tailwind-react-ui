import React from "react";

import { Link } from "react-router-dom";

import { components } from "../links";

import Footer from "./footer";
import Header from "./header";

export default ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-4">
          <div className={"grid grid-cols-8 gap-4"}>
            <div>
              <ul>
                {components.map((c) => (
                  <li className={"text-blue-500 hover:text-blue-800"}>
                    <Link to={c.link}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={"col-span-2"}>{children}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

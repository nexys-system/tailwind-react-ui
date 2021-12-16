import React from "react";

import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

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
            <Sidebar />
            <div className={"col-span-" + rightNCols}>{children}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

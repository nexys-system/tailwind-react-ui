import React from "react";

import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";

const View =
  <A,>(items: ViewField<A>[]) =>
  ({ data }: { data: A }) =>
    (
      <div className="border-t border-gray-200">
        <dl>
          {items.map(([k, item], i) => {
            const bgColor = i % 2 === 0 ? "bg-gray-50" : "bg-white";
            const divClass =
              "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 " + bgColor;

            return (
              <div key={i} className={divClass}>
                <dt className="text-sm font-medium text-gray-500">{k}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {typeof item === "function" ? item(data) : data[item]}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    );

export default View;

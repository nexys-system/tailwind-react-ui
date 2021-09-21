// taken from https://tailwindui.com/components/application-ui/navigation/navbars
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { title } from "../config";

import { menus, links } from "../links";

import { classNames } from "../lib/utils";

const navigation = menus.map((menu) => {
  return { name: menu.name, href: menu.link, current: false };
});

export default function Example() {
  const [current, setCurrent] = useState(links.home.link);

  return (
    <div className="bg-blue-400 text-white">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to={links.home.link}>{title}</Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    onClick={() => setCurrent(item.href)}
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      current === item.href
                        ? "text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

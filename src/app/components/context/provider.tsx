import React, { useContext } from "react";

import { ContextProvider } from "../../../lib";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <ContextProvider.Notification.Provider>
    {children}
  </ContextProvider.Notification.Provider>
);

export default Layout;

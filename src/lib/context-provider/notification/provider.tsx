import React from "react";
import Ctx from "./context";
import Toast from "../../components/notification/toast";
import Banner from "../../components/notification/banner";

import { Notification } from "./type";

export const Provider = ({ children }: { children: any }) => {
  const [notifications, setNotificationsInner] = React.useState<Notification[]>(
    []
  );

  const rmNotification = (idx: number) => {
    const ts = notifications.filter((_x, j) => j !== idx);
    setNotifications([...ts]);
  };

  const setNotification = (t: Notification) => {
    setNotifications([...notifications, t]);
  };

  const setNotifications = (t: Notification[]) => {
    setNotificationsInner([...t]);
  };

  return (
    <Ctx.Provider
      value={{
        setNotification,
        setNotifications,
        rmNotification,
        notifications,
      }}
    >
      <Banner />
      {children}
      <Toast />
    </Ctx.Provider>
  );
};

export default Provider;

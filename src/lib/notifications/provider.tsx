// import React from "react";
// import Ctx from "./context";
// import Toast from "./toast";
// import Banner from "./banner";
// import { Notification, NotificationType } from "./type";

// export const Provider = ({ children }: { children: any }) => {
//   const [notifications, setNotifications] = React.useState<Notification[]>([]);

//   const rmNotification = (idx: number) => {
//     const ts = notifications.filter((_x, j) => j !== idx);
//     setNotifications(ts);
//   };

//   const addToast = (t: Notification) => {
//     console.log(t);
//     setNotifications([...notifications, t]);
//   };

//   const banners: Banner[] = notifications
//     .filter((x) => x.type === NotificationType.banner)
//     .map((x) => {
//       return { text: x.text };
//     });

//   return (
//     <Ctx.Provider
//       value={{ setNotification: addToast, rmNotification, notifications }}
//     >
//       <Banner />
//       {children}
//       <Toast />
//     </Ctx.Provider>
//   );
// };

// export default Provider;

import React from "react";
import Ctx from "./context";
import Toast from "./toast";
import Banner from "./banner";
import { Notification } from "./type";

export const Provider = ({ children }: { children: any }) => {
  const [notifications, setNotificationsInner] = React.useState<Notification[]>(
    []
  );

  const rmNotification = (idx: number) => {
    console.log("before removing");
    console.log(notifications);
    const ts = notifications.filter((_x, j) => j !== idx);
    console.log("removing notification " + idx);
    console.log(ts);
    setNotifications([...ts]);
  };

  const setNotification = (t: Notification) => {
    console.log("setting new notification");
    console.log(t);
    setNotifications([...notifications, t]);
  };

  const setNotifications = (t: Notification[]) => {
    setNotificationsInner([...t]);
  };

  /*const banners: Banner[] = notifications
    .filter((x) => x.type === NotificationType.banner)
    .map((x) => {
      return { text: x.text };
    });*/

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

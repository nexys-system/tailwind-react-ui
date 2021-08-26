// import React from 'react';
// import * as Ctx from '../context';

// import { NotificationType } from '../type';

// interface Banner {
//   text: string;
// }

// const Banner = () => {
//   const { notifications, rmNotification } = Ctx.useToastContext();

//   const banners: Banner[] = notifications
//     .filter(x => x.type === NotificationType.banner)
//     .map(x => {
//       return { text: x.text };
//     });

//   return (
//     <div className="container">
//       {banners.map((banner, i) => (
//         <div className="alert alert-primary  alert-dismissible">
//           {banner.text}
//           <button
//             type="button"
//             className="close"
//             data-dismiss="alert"
//             aria-label="Close"
//             onClick={() => rmNotification(i)}
//           >
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import * as Ctx from "../context";

import BannerUI from "./ui";

import { NotificationType, MessageType } from "../type";
import { mapTypeToColor } from "../utils";

interface Banner {
  text: string;
  isHtml?: boolean;
  messageType: MessageType;
}

const Banner = () => {
  const { notifications, rmNotification } = Ctx.useToastContext();

  // const banners: Banner[] = notifications
  //   .filter((x) => x.type === NotificationType.banner)
  //   .map((x) => {
  //     return { text: x.text, messageType: x.messageType };
  //   });

  return (
    <>
      {notifications.map(
        (banner, i) =>
          banner.type === NotificationType.banner && (
            <BannerUI
              key={i}
              label={banner.text}
              onDismiss={() => rmNotification(i)}
              isHtml={true}
              color={mapTypeToColor(banner.messageType)}
            />
          )
      )}
    </>
  );
};

export default Banner;

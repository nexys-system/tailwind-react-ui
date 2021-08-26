// import React from "react";

// import { ToastProp } from "../type";
// import Close from "common/icons/close";

// import styled from "styled-components";

// const ToastUnit = ({
//   idx,
//   title,
//   timestring,
//   content,
//   onDismiss,
// }: ToastProp & { idx: number; onDismiss: (idx: number) => void }) => {
//   return (
//     <NotificationWrapper
//       className={`w-full bg-white font-extralight dark:bg-coolGray-700 dark:text-white shadow-md dark:shadow-white px-5 py-3 border-l-4 border-green-500`}
//       role="alert"
//       aria-live="assertive"
//       aria-atomic="true"
//       style={{ opacity: 1 }}
//     >
//       <div className="">
//         <strong>{title}</strong>
//         <small className="text-muted">{timestring}</small>
//         <button
//           type="button"
//           className="float-right"
//           data-dismiss="toast"
//           aria-label="Close"
//           onClick={() => onDismiss(idx)}
//         >
//           <span aria-hidden="true">
//             <Close />
//           </span>
//         </button>
//       </div>
//       <div>{content}</div>
//     </NotificationWrapper>
//   );
// };

// export default ToastUnit;

// const NotificationWrapper = styled.div`
//   animation: 0.2s ease-in-out slideInFromLeft;

//   @keyframes slideInFromLeft {
//     0% {
//       transform: translateX(-100%);
//     }
//     100% {
//       transform: translateX(0);
//     }
//   }
// `;

import React, { useEffect } from "react";

import { ToastProp } from "../type";
import Close from "common/icons/close";
import { mapTypeToColor } from "../utils";

const ToastUnit = ({
  idx,
  title,
  timestring,
  messageType,
  content,
  onDismiss,
}: ToastProp & { idx: number; onDismiss: (idx: number) => void }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onDismiss(idx);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [idx]);

  return (
    <div
      className={`w-full bg-white dark:bg-coolGray-700 dark:text-white shadow-md dark:shadow-white px-5 py-3 my-3 border-l-4 border-${mapTypeToColor(
        messageType
      )}-500 font-extralight`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{ opacity: 1, animation: "0.2s ease-in-out slideInFromLeft" }}
    >
      <style>{`
           @keyframes slideInFromLeft {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
      <div className="">
        <strong>{title}</strong>
        <small className="text-muted">{timestring}</small>
        <button
          type="button"
          className="float-right"
          data-dismiss="toast"
          aria-label="Close"
          onClick={() => onDismiss(idx)}
        >
          <span aria-hidden="true">
            <Close />{" "}
          </span>
        </button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default ToastUnit;

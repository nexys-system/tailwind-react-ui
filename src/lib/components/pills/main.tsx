// import React, { useContext } from "react";
// // needs to be replace with notifications context
// import { AppContext } from "../../context-provider/theme/context";
// import Spinner from "../loader/circular";
// import { ButtonProps } from "./type";
// import * as Classes from "./classes";
// import { ContextColor } from "../type";

// export default ({
//   id,
//   children,
//   onClick,
//   type,
//   disabled = false,
//   color = ContextColor.primary,
//   textColor = ContextColor.white,
//   variant = "filled",
//   isLoading = false,
// }: ButtonProps) => {
//   const {
//     state: { theme },
//   } = useContext(AppContext);

//   const handleClick = (_e: React.MouseEvent<HTMLButtonElement>): void => {
//     onClick && onClick(id);
//   };

//   const classArray: string[] = Classes.get(
//     { color, textColor, variant },
//     disabled,
//     isLoading,
//     theme
//   );

//   return (
//     <button
//       type={type}
//       className={classArray.join(" ")}
//       onClick={handleClick}
//       disabled={disabled || isLoading}
//     >
//       {isLoading ? (
//         <span className="flex flex-inline">
//           <Spinner /> Loading
//         </span>
//       ) : (
//         children
//       )}
//     </button>
//   );
// };

import React from "react";

import { getPillClasses } from "./classes";
import { ContextColor } from "../type";
import * as Type from "./type";

export default (props: Type.PillProps) => {
  const {
    id,
    title,
    badge,
    selected,
    onSelect,
    color = ContextColor.primary,
    fullWidth = true,
  } = props;
  return (
    <div
      onClick={() => onSelect && id && onSelect(id)}
      className={getPillClasses({ color }, selected, fullWidth).join(" ")}
    >
      {badge && (
        <span
          className={`inline-flex p-2
   ${
     selected
       ? `bg-white dark:bg-${color}-300 text-${color}-900`
       : `bg-${color}-500 text-white`
   }
   rounded-full h-8 w-8 justify-center items-center font-light`}
        >
          {badge}
        </span>
      )}
      <span className="inline-flex px-2">{title}</span>
    </div>
  );
};

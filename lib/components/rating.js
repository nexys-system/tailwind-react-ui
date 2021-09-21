import React from "../../_snowpack/pkg/react.js";
export default ({rating, onChange}) => {
  const classes = "p-2 text-xl cursor-pointer fas fa-star";
  const ratings = [1, 2, 3, 4, 5];
  return /* @__PURE__ */ React.createElement("span", null, ratings.map((r) => {
    const sClass = !rating || rating < r ? "text-coolGray-300 hover:text-coolGray-400" : "text-yellow-300 hover:text-yellow-400";
    return /* @__PURE__ */ React.createElement("i", {
      onClick: () => onChange && onChange(r),
      className: `${sClass} ${classes}`
    });
  }));
};

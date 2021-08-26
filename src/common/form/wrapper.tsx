import React from "react";

export const Wrapper = ({
  label,
  info,
  children,
  errors,
  inputType = "default",
}: {
  label?: string;
  info?: string;
  children: JSX.Element | JSX.Element[];
  errors?: string[];
  inputType?: "default" | "switch";
}) => {
  return (
    <div className={`controls my-3 `}>
      <div className={`${inputType === "switch" && "flex"}`}>
        <label
          className={`control-label dark:text-white font-extralight ${
            inputType === "switch" && "mr-5"
          }`}
        >
          {label}
        </label>
        {children}
      </div>
      <small
        //id="emailHelp"
        className="form-text text-muted"
      >
        {info}
      </small>
      {errors && Array.isArray(errors) && (
        <div className="text-rose-500 font-extralight">
          <ul className="list list-unstyled">
            {errors.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Wrapper2 = ({
  label,
  children,
}: {
  label?: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <div className="controls">
    {label && <label className="mr-sm-2">{label}</label>}
    {children}
  </div>
);

export default Wrapper;

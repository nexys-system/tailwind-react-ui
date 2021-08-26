import React from "react";
interface BaseInputs {
  value: any;
  onClick?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  errors?: string[];
  placeholder?: string;
  type?: "text" | "number";
  autoFocus?: boolean;
}
export default ({
  value,
  errors,
  onChange,
  onClick,
  disabled,
  placeholder,
  type = "text",
  autoFocus = false,
}: BaseInputs) => {
  return (
    <input
      className={`cursor-pointer font-extralight  border rounded 
        w-full px-3 py-1 pb-2 pr-2 focus focus:border-sky-500  dark:bg-coolGray-700  
        focus:outline-none active:outline-none active:border-primary
        transition ease-in-out duration-200
        ${
          errors && errors.length > 0
            ? "border-rose-500"
            : "border-coolGray-200 "
        }
        `}
      onChange={onChange}
      onClick={onClick}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      autoFocus={autoFocus}
    />
  );
};

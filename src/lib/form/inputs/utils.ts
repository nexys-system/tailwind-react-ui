export const getClasses = (
  errors?: string[]
) => `cursor-pointer font-extralight  border rounded-input 
w-full px-3 py-1 pb-2 pr-2 focus focus:border-primary  dark:bg-coolGray-700  
focus:outline-none active:outline-none active:border-primary
transition ease-in-out duration-200
${errors && errors.length > 0 ? "border-rose-500" : "border-coolGray-200 "}
`;

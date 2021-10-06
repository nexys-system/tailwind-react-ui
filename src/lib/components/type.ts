/**
 * references
 * MUI v5 : https://mui.com/api/button/#props
 * bootstrap: https://getbootstrap.com/docs/4.0/components/alerts/
 */
export enum ContextColor {
  primary = "primary",
  secondary = "secondary",
  info = "info",
  success = "sucesss",
  warning = "warning",
  error = "error",
  black = "black",
  white = "white",
}

export const contextBgColors = {
  [ContextColor.primary]: "bg-primary",
  [ContextColor.secondary]: "bg-secondary",
  [ContextColor.info]: "bg-info",
  [ContextColor.success]: "bg-sucesss",
  [ContextColor.warning]: "bg-warning",
  [ContextColor.error]: "bg-error",
  [ContextColor.white]: "bg-whit3e",
  [ContextColor.black]: "bg-black",
};

export const contextTextColors = {
  [ContextColor.primary]: "text-primary",
  [ContextColor.secondary]: "text-secondary",
  [ContextColor.info]: "text-info",
  [ContextColor.success]: "text-sucesss",
  [ContextColor.warning]: "text-warning",
  [ContextColor.error]: "text-error",
  [ContextColor.white]: "text-white",
  [ContextColor.black]: "text-black",
};

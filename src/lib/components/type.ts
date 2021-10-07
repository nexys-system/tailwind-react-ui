/**
 * references
 * MUI v5 : https://mui.com/api/button/#props
 * bootstrap: https://getbootstrap.com/docs/4.0/components/alerts/
 */
export enum ContextColor {
  primary = "primary",
  secondary = "secondary",
  info = "info",
  success = "success",
  warning = "warning",
  error = "error",
  black = "black",
  white = "white",
}

export const contextBgColors = {
  [ContextColor.primary]: "bg-primary",
  [ContextColor.secondary]: "bg-secondary",
  [ContextColor.info]: "bg-info",
  [ContextColor.success]: "bg-success",
  [ContextColor.warning]: "bg-warning",
  [ContextColor.error]: "bg-error",
  [ContextColor.white]: "bg-white",
  [ContextColor.black]: "bg-black",
};

export const contextTextColors = {
  [ContextColor.primary]: "text-primary",
  [ContextColor.secondary]: "text-secondary",
  [ContextColor.info]: "text-info",
  [ContextColor.success]: "text-success",
  [ContextColor.warning]: "text-warning",
  [ContextColor.error]: "text-error",
  [ContextColor.white]: "text-white",
  [ContextColor.black]: "text-black",
};

// [100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => ['primary', 'secondary', 'info', 'warning', 'success', 'error'].map(c => ['bg', 'text', 'from', 'to'].map(p => p + '-' + c + '-' + s))).flat()

// ['bg-primary-100', 'text-primary-100', 'from-primary-100', 'to-primary-100', 'bg-secondary-100', 'text-secondary-100', 'from-secondary-100', 'to-secondary-100', 'bg-info-100', 'text-info-100', 'from-info-100', 'to-info-100', 'bg-warning-100', 'text-warning-100', 'from-warning-100', 'to-warning-100', 'bg-success-100', 'text-success-100', 'from-success-100', 'to-success-100', 'bg-error-100', 'text-error-100', 'from-error-100', 'to-error-100', 'bg-primary-200', 'text-primary-200', 'from-primary-200', 'to-primary-200', 'bg-secondary-200', 'text-secondary-200', 'from-secondary-200', 'to-secondary-200', 'bg-info-200', 'text-info-200', 'from-info-200', 'to-info-200', 'bg-warning-200', 'text-warning-200', 'from-warning-200', 'to-warning-200', 'bg-success-200', 'text-success-200', 'from-success-200', 'to-success-200', 'bg-error-200', 'text-error-200', 'from-error-200', 'to-error-200', 'bg-primary-300', 'text-primary-300', 'from-primary-300', 'to-primary-300', 'bg-secondary-300', 'text-secondary-300', 'from-secondary-300', 'to-secondary-300', 'bg-info-300', 'text-info-300', 'from-info-300', 'to-info-300', 'bg-warning-300', 'text-warning-300', 'from-warning-300', 'to-warning-300', 'bg-success-300', 'text-success-300', 'from-success-300', 'to-success-300', 'bg-error-300', 'text-error-300', 'from-error-300', 'to-error-300', 'bg-primary-400', 'text-primary-400', 'from-primary-400', 'to-primary-400', 'bg-secondary-400', 'text-secondary-400', 'from-secondary-400', 'to-secondary-400', 'bg-info-400', 'text-info-400', 'from-info-400', 'to-info-400', 'bg-warning-400', 'text-warning-400', 'from-warning-400', 'to-warning-400', 'bg-success-400', 'text-success-400', 'from-success-400', 'to-success-400', 'bg-error-400', 'text-error-400', 'from-error-400', 'to-error-400', 'bg-primary-500', 'text-primary-500', 'from-primary-500', 'to-primary-500']

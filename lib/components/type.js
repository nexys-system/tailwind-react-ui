export var ContextColor;
(function(ContextColor2) {
  ContextColor2["primary"] = "primary";
  ContextColor2["secondary"] = "secondary";
  ContextColor2["info"] = "info";
  ContextColor2["success"] = "success";
  ContextColor2["warning"] = "warning";
  ContextColor2["error"] = "error";
  ContextColor2["black"] = "black";
  ContextColor2["white"] = "white";
})(ContextColor || (ContextColor = {}));
export var ContextBorderRadius;
(function(ContextBorderRadius2) {
  ContextBorderRadius2["none"] = "none";
  ContextBorderRadius2["sm"] = "sm";
  ContextBorderRadius2["md"] = "md";
  ContextBorderRadius2["lg"] = "lg";
  ContextBorderRadius2["full"] = "full";
})(ContextBorderRadius || (ContextBorderRadius = {}));
export const contextBdRadius = {
  [ContextBorderRadius.none]: "rounded-none",
  [ContextBorderRadius.sm]: "rounded-sm",
  [ContextBorderRadius.md]: "rounded-md",
  [ContextBorderRadius.lg]: "rounded-lg",
  [ContextBorderRadius.full]: "rounded-full"
};
export const contextBgColors = {
  [ContextColor.primary]: "bg-primary",
  [ContextColor.secondary]: "bg-secondary",
  [ContextColor.info]: "bg-info",
  [ContextColor.success]: "bg-success",
  [ContextColor.warning]: "bg-warning",
  [ContextColor.error]: "bg-error",
  [ContextColor.white]: "bg-white",
  [ContextColor.black]: "bg-black"
};
export const contextTextColors = {
  [ContextColor.primary]: "text-primary",
  [ContextColor.secondary]: "text-secondary",
  [ContextColor.info]: "text-info",
  [ContextColor.success]: "text-success",
  [ContextColor.warning]: "text-warning",
  [ContextColor.error]: "text-error",
  [ContextColor.white]: "text-white",
  [ContextColor.black]: "text-black"
};

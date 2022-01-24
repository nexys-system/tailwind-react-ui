import {MessageType} from "./type.js";
export const mapTypeToTitle = (t) => {
  switch (t) {
    case MessageType.success:
      return "Success!";
    case MessageType.warning:
      return "Warning!";
    case MessageType.error:
      return "Error!";
    case MessageType.info:
      return "Info";
  }
};
export const mapTypeToColor = (t) => {
  switch (t) {
    case MessageType.success:
      return "success";
    case MessageType.warning:
      return "warning";
    case MessageType.error:
      return "error";
    case MessageType.info:
      return "primary";
  }
};

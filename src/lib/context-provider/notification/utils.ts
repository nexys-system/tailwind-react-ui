import { MessageType } from "./type";

export const mapTypeToTitle = (t: MessageType): string => {
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

export const mapTypeToColor = (t: MessageType): string => {
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

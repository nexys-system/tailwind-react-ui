import React from "react";
// import { Chip, Tooltip } from '@material-ui/core';

import NUtils from "@nexys/utils";
import Chip from "common/components/pill";

interface Props {
  file: File;
  hidePreview?: boolean;
  hideLabel?: boolean;
  onSend?: (b64: string) => Promise<void>;
  onRemove?: () => void;
  width?: number;
  height?: number;
}

const widthDefault = 150;

export const getIsImage = (contentType: string) =>
  contentType.slice(0, 5) === "image";

export const getIsPdf = (contentType: string) =>
  contentType === "application/pdf";

const Label = (props: Props) => {
  const { file, onRemove, hideLabel } = props;

  if (hideLabel) {
    return null;
  }
  return (
    <>
      {file.name.length > 25 ? file.name.substr(0, 25) + "..." : file.name}
      &nbsp;&nbsp;
      <small>
        <i>{NUtils.string.formatSize(file.size)}</i>
      </small>
    </>
    // {/* <Tooltip title={file.name}> */}
    //   {/* <Chip */}
    //     // color="primary"
    //     // size="small"
    //     // onDelete={onRemove}
    //     // style={{ margin: '3px' }}
    //     // label={
    //     //   <>
    //     //     {file.name.length > 25
    //     //       ? file.name.substr(0, 25) + '...'
    //     //       : file.name}
    //     //     &nbsp;&nbsp;
    //     //     <small>
    //     //       <i>{NUtils.string.formatSize(file.size)}</i>
    //     //     </small>
    //     //   </>
    //     // }
    //   // />
    // {/* </Tooltip> */}
  );
};

const Display = ({ file, onSend, width = widthDefault, height }: Props) => {
  const [sendDisabled, setSendDisabled] = React.useState<boolean>(false);
  // type: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
  const { name, type } = file;

  const isImage: boolean = getIsImage(type);
  const isPdf: boolean = getIsPdf(type);

  if (!isImage && !isPdf) {
    return (
      <p>
        <i>No preview available</i>
      </p>
    );
  }

  const objectUrl: string = URL.createObjectURL(file);

  const handleSend = async (): Promise<void> => {
    setSendDisabled(true);
    const pfileBuffer: Promise<ArrayBuffer> = file.arrayBuffer();
    pfileBuffer.then((fileBuffer) => {
      const b64 = NUtils.buffer.arrayBufferTo64(fileBuffer);
      onSend && onSend(b64).then((x) => setSendDisabled(false));
    });
  };

  return (
    <>
      {isImage && (
        <img
          style={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}
          alt={name}
          width={width}
          height={height}
          src={objectUrl}
        />
      )}

      {isPdf && (
        <iframe title={name} src={objectUrl} width={width} height="200" />
      )}

      {onSend && (
        <button onClick={handleSend} disabled={sendDisabled}>
          Send
        </button>
      )}
    </>
  );
};

export default (props: Props) => {
  return (
    <>
      <Label {...props} />
      <br />
      {!props.hidePreview && <Display {...props} />}
    </>
  );
};

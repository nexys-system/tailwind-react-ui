import React from "react";

import { Clipboard, CheckCircle } from "../../icons";

enum CopyState {
  idle = 1,
  progress = 2,
  copied = 3,
}

export const Statement = ({
  code,
  copyToClipboard = false,
}: {
  code: string;
  copyToClipboard?: boolean;
}): JSX.Element => {
  const [copyState, setCopyState] = React.useState<CopyState>(CopyState.idle);

  const handleClick = async () => {
    setCopyState(CopyState.progress);
    await navigator.clipboard.writeText(code);
    setCopyState(CopyState.copied);
  };

  return (
    <span
      onClick={copyToClipboard ? handleClick : undefined}
      className={
        "cursor-pointer rounded p-1 pb-1 px-3 text-sm text-gray-300 hover:text-white " +
        (copyState === CopyState.progress ? "bg-yellow-500" : "bg-black")
      }
    >
      <code>
        {code}
        &nbsp;
      </code>

      {copyToClipboard && (
        <button
          disabled={copyState === CopyState.progress}
          className={"border-l-2 border-gray-700 pl-2"}
        >
          {copyState !== CopyState.copied && <Clipboard />}

          {copyState === CopyState.copied && (
            <CheckCircle className={"text-green-500"} />
          )}
        </button>
      )}
    </span>
  );
};

export const Block = ({ code }: { code: string }) => {
  return (
    <code className="block whitespace-pre overflow-x-scroll cursor-pointer rounded p-1 pb-1 px-3 text-sm text-gray-800 hover:text-gray-700 bg-gray-100">
      {code}
    </code>
  );
};

// mb-1 mb-2 mb-3 mb-4

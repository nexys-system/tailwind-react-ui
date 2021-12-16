import React from "react";

import { Clipboard, LockOpen as ViewIcon } from "../icons";

export const Copy = ({ content }: { content: string }) => {
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
  };

  if (copied) {
    setTimeout(() => setCopied(false), 2000);

    return <span>Copied!</span>;
  }

  return (
    <span className={"cursor-pointer"} onClick={handleCopy}>
      <Clipboard />
    </span>
  );
};

export const truncateString = (s?: string, max: number = 40) => {
  if (!s) {
    return "-";
  }

  const l = s.length;

  // if max == 0 returns an empty string
  if (max === 0) {
    return "";
  }

  if (l > max) {
    return s.substring(0, max) + "...";
  }

  return s;
};

export const CopyCodeSnippet = ({
  content,
  truncate,
  toggleView = false,
}: {
  content: string;
  truncate?: number;
  toggleView?: boolean;
}) => {
  const [truncateOverride, setTruncate] = React.useState<boolean>(false);
  const c: string =
    truncateOverride === true || truncate === undefined
      ? content
      : truncateString(content, truncate);

  return (
    <>
      <code>{c}</code>
      <Copy content={content} />
      {toggleView && (
        <span
          className={"cursor-pointer"}
          onClick={() => setTruncate(!truncateOverride)}
        >
          <ViewIcon />
        </span>
      )}
    </>
  );
};

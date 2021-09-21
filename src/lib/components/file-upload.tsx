import React, { useState } from "react";

import Spinner from "./loader/circular";
import { ChevronUp } from "../icons";

export default ({ promise }: { promise: any }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    if (!e.target || !e.target.files) {
      throw Error("file is undefined");
    }
    const { files } = e.target; //: { files: FileList }
    const fileArray: File[] = Array.from(files);

    if (fileArray.length === 0) {
      throw Error("file array is empty");
    }

    const file: File = fileArray[0];

    promise(file)
      .then(() => {
        // Utils.confirmMessage(enqueueSnackbar, message, 'success');
      })
      .catch((err: any) => {
        // Utils.confirmMessage(enqueueSnackbar, err.msg || errorMessage, 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <label className="items-center px-5 py-3 rounded-full shadow-lg tracking-wide uppercase cursor-pointer bg-primary text-white">
      {loading ? (
        <>
          <Spinner /> Loading
        </>
      ) : (
        <>
          <ChevronUp />{" "}
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input type="file" className="hidden" onChange={handleChange} />
        </>
      )}
    </label>
  );
};

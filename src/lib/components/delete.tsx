import React from "react";

import HeadlessDelete from "@nexys/react-bootstrap/dist/headless/delete";

const DeleteBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={"border  rounded text-red-700 border-red-700 p-2"}
    >
      Delete
    </button>
  );
};

const DeleteGeneric = HeadlessDelete(DeleteBtn);

export default DeleteGeneric;

import React from "react";

import HeadlessDelete from "@nexys/react-bootstrap/dist/headless/delete";

import Button from "../components/buttons/main";

const DeleteBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick} color="error">
      Delete
    </Button>
  );
};

const DeleteGeneric = HeadlessDelete(DeleteBtn);

export default DeleteGeneric;

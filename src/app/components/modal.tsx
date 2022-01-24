import React, { useState } from "react";

import Modal from "../../lib/components/modal";
import Button from "../../lib/components/buttons/main";
import Typography from "../../lib/components/typography";
import confirm from "../../lib/components/modal/confirm";

import { Block } from "../../lib/components/code";

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  // const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  return (
    <div className="font-extralight">
      <Typography variant={"h2"}>Modal</Typography>
      <p className={"m-2"}>
        Pop-up window on the same page to give some extra information or request
        an action from a user
      </p>
      <Typography variant={"h4"}>Simple</Typography>
      <p className={"m-2"}>
        A simple modal wrapper where the whole body needs to be pasted
      </p>
      <Button onClick={() => setOpen(!open)}>Show modal</Button>
      <Modal open={open}>
        <>
          <p className="text-center m-3">
            Some content here
            <br />
            And here
          </p>
          <hr />
          <Button onClick={() => setOpen(false)}>Close</Button>
        </>
      </Modal>

      <br />
      <br />
      <Typography variant={"h4"}>Confirm</Typography>
      <p className={"m-2"}>
        Confirm modal: used as a promise, provides resolve and reject callbacks
      </p>
      {/* <Statement
        code={`
      confirm({ message: "Are you sure?" }).then(
        () => setResult("You selected CONFIRM"),
        () => setResult("You selected CANCEL")
      );`}
      /> */}

      <Button
        color="warning"
        onClick={() => {
          confirm({ message: "Are you sure?" }).then(
            () => setResult("You selected CONFIRM"),
            () => setResult("You selected CANCEL")
          );
        }}
      >
        Do something dangerous
      </Button>
      <br />
      <code>{result}</code>
      <br />
      <div className={"m-2"}>
        <p>Usage:</p>
        <Block
          code={`confirm({ message: "Are you sure?" }).then(
        () => setResult("You selected CONFIRM"),
        () => setResult("You selected CANCEL")
      );`}
        />
      </div>
    </div>
  );
};

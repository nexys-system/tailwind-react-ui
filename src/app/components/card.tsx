import React from "react";
import Typography from "../../lib/components/typography";
import Card from "../../lib/components/card";
import { Sun as Icon, Edit as EditIcon } from "../../lib/icons";

const Right = () => {
  const [editShow, setEditShow] = React.useState<boolean>(false);
  const [sunShow, setSunShow] = React.useState<boolean>(false);

  return (
    <span className={"text-sm"}>
      <a
        href="#"
        onMouseOver={() => setEditShow(true)}
        onMouseOut={() => setEditShow(false)}
      >
        <EditIcon />
        {editShow && <>Edit</>}
      </a>
      <a
        href="#"
        onMouseOver={() => setSunShow(true)}
        onMouseOut={() => setSunShow(false)}
      >
        <Icon /> {sunShow && <>Sun</>}
      </a>
    </span>
  );
};

export default () => {
  return (
    <>
      <Typography variant={"h2"}>Card</Typography>
      <Card title="Card Title">
        <p>Content</p>
      </Card>

      <Card>
        <p>no title</p>
      </Card>

      <Card right={<Right />}>
        <p>no title</p>
      </Card>
    </>
  );
};

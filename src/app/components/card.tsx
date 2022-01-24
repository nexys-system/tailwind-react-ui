import React from "react";
import Typography from "../../lib/components/typography";
import Card from "../../lib/components/card";
import { Sun as Icon, Edit as EditIcon } from "../../lib/icons";
import PropList from "./props-list";
import { Internal as Link } from "../../lib/components/link";

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
      <br />
      <br />
      {/* /**
     }: {
  title?: string;
  children: JSX.Element | JSX.Element[];
  
  ?: React.CSSProperties;
  className?: string;
  colSpan?: number;
  right?: JSX.Element | JSX.Element[];
  rounded?: ContextBorderRadius | ContextBorderRadiusString;
}) => { */}
      <PropList
        data={[
          {
            id: 1,
            name: "title",
            mandatory: false,
            description: "",
          },
          {
            id: 2,
            name: "children",
            mandatory: true,
            description: "Content of the card",
          },
          {
            id: 3,
            name: "style",
            mandatory: false,
            description: "Optional additional CSS properties",
          },
          {
            id: 4,
            name: "className",
            mandatory: false,
            description: "Optional additional classes",
          },
          {
            id: 5,
            name: "colSpan",
            mandatory: false,
            description: "Optional card width",
          },
          {
            id: 6,
            name: "right",
            mandatory: false,
            description: "Optional content to the right of the title",
          },
          {
            id: 7,
            name: "rounded",
            mandatory: false,
            description: (
              <span>
                See <Link url="/radius">Border Radius </Link>
              </span>
            ),
          },
        ]}
      />
    </>
  );
};

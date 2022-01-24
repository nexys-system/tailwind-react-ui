import React from "react";
import Button from "../../lib/components/buttons/main";
import * as C from "../../lib/components/type";
import PropList from "./props-list";
import { Internal as Link } from "../../lib/components/link";

export default () => {
  return (
    <div className="w-full">
      <h1 className="font-bold mb-5 text-primary uppercase">Button</h1>
      <div>Filled</div>
      <div className="flex flex-row mb-10">
        <Button color={C.ContextColor.primary}>Primary</Button>
        <Button color={C.ContextColor.secondary}>Secondary</Button>
        <Button color={C.ContextColor.info}>Info</Button>
        <Button color={C.ContextColor.warning}>Warning</Button>
        <Button color={C.ContextColor.error}>Error</Button>
        <Button color={C.ContextColor.success}>Success</Button>
      </div>
      <div>Transparent</div>
      <div className="flex flex-row">
        <Button color={C.ContextColor.primary} variant="transparent">
          Primary
        </Button>
        <Button color={C.ContextColor.secondary} variant="transparent">
          Secondary
        </Button>
        <Button color={C.ContextColor.info} variant="transparent">
          Info
        </Button>
        <Button color={C.ContextColor.warning} variant="transparent">
          Warning
        </Button>
        <Button color={C.ContextColor.error} variant="transparent">
          Error
        </Button>
        <Button color={C.ContextColor.success} variant="transparent">
          Success
        </Button>
      </div>
      <div>With different border radius</div>
      <div className="flex flex-row">
        <Button color={C.ContextColor.primary} rounded="sm">
          Small
        </Button>
        <Button color={C.ContextColor.secondary} rounded="md">
          Medium
        </Button>
        <Button color={C.ContextColor.info} rounded="lg">
          Large
        </Button>
        <Button color={C.ContextColor.warning} rounded="full">
          Full
        </Button>
        <Button color={C.ContextColor.error} rounded="none">
          None
        </Button>
      </div>

      <Button isLoading={true}>is loading</Button>

      <Button disabled={true}>disabled</Button>

      <br />

      <PropList
        data={[
          {
            id: 1,
            name: "color",
            mandatory: true,
            description: (
              <span>
                See <Link url="/color">Colors </Link>
              </span>
            ),
          },
          {
            id: 2,
            name: "rounded",
            mandatory: false,
            description: (
              <span>
                See <Link url="/radius">Border Radius </Link>
              </span>
            ),
          },
          {
            id: 3,
            name: "textColor",
            description: (
              <span>
                See <Link url="/color">Colors </Link>
              </span>
            ),
            mandatory: true,
          },
          {
            id: 4,
            name: "variant",
            description: (
              <span>
                <code>filled | transparent</code>
              </span>
            ),
          },
          {
            id: 5,
            name: "id",
            description: "",
          },
          { id: 6, name: "disabled", description: "" },
          {
            id: 7,
            name: "children",
            description: "Content of the button",
            mandatory: true,
          },
          { id: 8, name: "onClick", description: "Optional handler" },
          {
            id: 9,
            name: "type",
            description: (
              <span>
                <code>button | submit | reset</code>
              </span>
            ),
          },
          {
            id: 10,
            name: "isLoading",
            description:
              "Indicates if the button should be disabled to to loading event",
          },
        ]}
      />
    </div>

    // export type ButtonType = "button" | "submit" | "reset";

    // export interface ButtonStyle {

    //   variant: "filled" | "transparent";
    // }

    // export interface ButtonProps extends Partial<ButtonStyle> {
    //   id?: number | string;
    //   disabled?: boolean;
    //   children: JSX.Element | string | number;
    //   onClick?: (id?: number | string) => void;
    //   type?: ButtonType;
    //   isLoading?: boolean;
    // }
  );
};

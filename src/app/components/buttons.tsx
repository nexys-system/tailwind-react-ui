import React from "react";
import Button from "../../lib/components/buttons/main";
import * as C from "../../lib/components/type";

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

      <Button isLoading={true}>is loading</Button>

      <Button disabled={true}>disabled</Button>
    </div>
  );
};

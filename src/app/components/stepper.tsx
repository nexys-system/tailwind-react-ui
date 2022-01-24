import React from "react";
import Stepper from "../../lib/components/stepper";
import * as Icons from "../../lib/icons";

const Icon = ({ idx }: { idx: number }) => (
  <div className="p-1 font-medium">{idx}</div>
);
export default () => {
  return (
    <Stepper
      steps={[
        { title: "One", Icon: () => <Icon idx={1} /> },
        { title: "Two", Icon: () => <Icon idx={2} /> },
        { title: "Three", Icon: () => <Icon idx={3} /> },
      ]}
      activeStep={1}
    />
  );
};

import React, { useState } from "react";
import Pill from "../../lib/components/pill";
export default () => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <>
      <h1>Pill</h1>
      <Pill
        id={1}
        title="Pill one"
        badge="A"
        color="blue"
        selected={selected === 1}
        onSelect={() => setSelected(1)}
      />
      <Pill
        id={2}
        title="Pill two"
        badge="B"
        color="rose"
        selected={selected === 2}
        onSelect={() => setSelected(2)}
      />
      <Pill
        id={2}
        title="Pill three"
        badge="C"
        color="purple"
        selected={selected === 3}
        onSelect={() => setSelected(3)}
      />
    </>
  );
};

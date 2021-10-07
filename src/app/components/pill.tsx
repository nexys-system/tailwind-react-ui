import React, { useState } from "react";
import Pill from "../../lib/components/pills/main";
import * as C from "../../lib/components/type";

export default () => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <>
      <h1>Pill</h1>
      <Pill
        id={1}
        title="Pill primary"
        badge="A"
        color={C.ContextColor.primary}
        selected={selected === 1}
        onSelect={() => setSelected(1)}
      />
      <Pill
        id={2}
        title="Pill secondary"
        badge="B"
        color={C.ContextColor.secondary}
        selected={selected === 2}
        onSelect={() => setSelected(2)}
      />
      <Pill
        id={2}
        title="Pill info"
        badge="C"
        color={C.ContextColor.info}
        selected={selected === 3}
        onSelect={() => setSelected(3)}
      />
      <Pill
        id={4}
        title="Pill success"
        badge="A"
        color={C.ContextColor.success}
        selected={selected === 4}
        onSelect={() => setSelected(4)}
      />
      <Pill
        id={5}
        title="Pill warning"
        badge="B"
        color={C.ContextColor.warning}
        selected={selected === 5}
        onSelect={() => setSelected(5)}
      />
      <Pill
        id={6}
        title="Pill error"
        badge="C"
        color={C.ContextColor.error}
        selected={selected === 6}
        onSelect={() => setSelected(6)}
      />
    </>
  );
};

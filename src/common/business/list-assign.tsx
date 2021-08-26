// taken from https://material-ui.com/components/lists/#list-controls
import React from "react";
import Checkbox from "../form/inputs/checkbox";

const Loader = (props: { isLoading: boolean }): JSX.Element | null => {
  const { isLoading } = props;

  if (isLoading !== true) {
    return null;
  }

  return (
    <p>
      <i>is being updated</i>
    </p>
  );
};

interface Item<SId> {
  id: SId;
  assigned: boolean;
  name: string;
}

type UpdatePromise<StatusId> = (
  id: StatusId,
  assigned: boolean
) => Promise<boolean>;

// id1 is a placeholder, else does not compile
const ListUnit = <StatusId,>({
  i,
  value,
  updatePromise,
}: {
  i: number;
  value: Item<StatusId>;
  updatePromise: UpdatePromise<StatusId>;
}): JSX.Element => {
  const [isChecked, setChecked] = React.useState<boolean>(!!value.assigned);
  const [isLoading, setLoading] = React.useState(false);
  const [assigned, setAssigned] = React.useState(value.assigned);

  const handleClick = (): void => {
    if (isLoading === true) {
      console.warn("this action is blocked since the promise is still working");
    }

    setLoading(true);

    updatePromise(value.id, assigned).then((x) => {
      setChecked(!isChecked);
      setLoading(false);
      // we check if the answer (this is a hack because Koa does not return `null`)
      setAssigned(Boolean(x));
    });
  };

  return (
    <li key={i} role={undefined}>
      <Checkbox value={isChecked} onChange={handleClick} />

      {value.name}
      <Loader isLoading={isLoading} />
    </li>
  );
};

const ListAssign = <StatusId,>(props: {
  data: Item<StatusId>[];
  updatePromise: UpdatePromise<StatusId>;
}): JSX.Element => {
  const { data, updatePromise } = props;

  return (
    <ul>
      {data.map((value, i) => (
        <ListUnit key={i} i={i} value={value} updatePromise={updatePromise} />
      ))}
    </ul>
  );
};

export default ListAssign;

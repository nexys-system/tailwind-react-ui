import React from "react";

import Spinner from "../spinner/main";

interface DataLoadProps<A> {
  getData: () => Promise<A>;
  Component: ({ data }: { data: A }) => JSX.Element;
  forceReload?: number;
}

const DataLoadGeneric = (Loader: () => JSX.Element) => <A,>({
  getData,
  Component,
  forceReload,
}: DataLoadProps<A>) => {
  const [data, setData] = React.useState<A | null>(null);

  if (forceReload) {
    React.useEffect(() => {
      setData(null);
    }, [forceReload]);
  }

  if (data === null) {
    getData().then((x) => setData(x));
    return <Loader />;
  }

  return <Component data={data} />;
};

export default DataLoadGeneric(() => <Spinner />);

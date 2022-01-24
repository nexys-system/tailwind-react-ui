import React from "../../../_snowpack/pkg/react.js";
import Spinner from "../spinner/main.js";
const DataLoadGeneric = (Loader) => ({
  getData,
  Component,
  forceReload
}) => {
  const [data, setData] = React.useState(null);
  if (forceReload) {
    React.useEffect(() => {
      setData(null);
    }, [forceReload]);
  }
  if (data === null) {
    getData().then((x) => setData(x));
    return /* @__PURE__ */ React.createElement(Loader, null);
  }
  return /* @__PURE__ */ React.createElement(Component, {
    data
  });
};
export default DataLoadGeneric(() => /* @__PURE__ */ React.createElement(Spinner, null));

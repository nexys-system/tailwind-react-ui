import React from "react";
import * as Utils from "@nexys/utils";
import Delete from "../../lib/components/delete";
import Typography from "../../lib/components/typography";

const deleteById = () => Utils.promise.delay(1000);

const homeLink = "/";

const D = Delete<string>(
  deleteById,
  homeLink,
  "Are you sure you would like to delete?"
);

export default () => (
  <>
    <Typography variant={"h2"}>Delete</Typography>
    <D id={"myuuid"} />
  </>
);

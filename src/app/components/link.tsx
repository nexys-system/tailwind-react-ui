import React, { useState } from "react";

import Typography from "../../lib/components/typography";

import * as Icons from "../../lib/icons";

import { Internal, External } from "../../lib/components/link";

export default () => {
  return (
    <div className="font-extralight">
      <Typography variant={"h2"}>Link</Typography>
      <p className={"m-2"}>Formatted internal and external links</p>
      <Typography variant={"h4"}>Internal</Typography>
      <p className={"m-2"}>
        React router link, pointing at another location within the same host
      </p>
      <Internal url={"/modal"}>
        <Icons.ArrowCircleRight /> Some text
      </Internal>

      <br />
      <br />
      <Typography variant={"h4"}>External</Typography>
      <p className={"m-2"}>
        External link, by default opens in a new tab (possible to regulate via{" "}
        <code>inline</code> parameter)
      </p>
      <External url={"https://tssacademy.biz"}>
        <Icons.ArrowCircleRight /> Some text
      </External>

      {/* </div> */}
    </div>
  );
};

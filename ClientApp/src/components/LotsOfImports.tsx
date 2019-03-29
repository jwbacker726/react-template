import React, { Component } from "react";
import * as _ from "underscore";
import * as $ from "jquery";

const LotsOfImports = (props: any) => {
  const x = new Promise(() => {});

  return (
    <>
      <h1>Lots of Stuff</h1>
      <div>{_}</div>
      <div>{$}</div>
    </>
  );
};

export default LotsOfImports;

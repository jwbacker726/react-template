import React, { Component, useEffect } from "react";
import * as _ from "underscore";
import * as $ from "jquery";

const LotsOfImports = (props: { name: string }) => {
  useEffect(() => {
    console.log("Loaded");

    // Comment these out and watch the bundle side shrink
    console.log($);
    console.log(_);

    return () => console.log("unloaded");
  });

  return (
    <>
      <h1>Lots of {props.name} Stuff</h1>
    </>
  );
};

export default LotsOfImports;

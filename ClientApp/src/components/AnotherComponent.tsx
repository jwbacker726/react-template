import moment from "moment";
import "../../node_modules/toastr/build/toastr.css";
import toastr from "toastr";
import React, { Component } from "react";
import { PrettyBorder } from "./styledComponents";

export default class AnotherComponent extends Component {
  public render() {
    return (
      <PrettyBorder>
        <h5>Another component</h5>
        <div onClick={this.onClick}>{"click =>" + moment(new Date()).format("LL")}</div>
      </PrettyBorder>
    );
  }

  onClick = () => {
    console.log("clicked");
    toastr.success("You clicked me! Yea!!!");
  };
}

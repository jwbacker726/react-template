import moment from "moment";
import '../../node_modules/toastr/build/toastr.css';
import toastr from "toastr";
import React, { Component } from "react";

export default class AnotherComponent extends Component {
  public render() {
    return <div onClick={this.onClick}>{moment(new Date()).format("LL")}</div>;
  }

  onClick = () => {
    console.log("clicked");
    toastr.success("You clicked me! Yea!!!");
  };
}

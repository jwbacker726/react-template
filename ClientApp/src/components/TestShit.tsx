import React, { Component } from "react";
import styled from "styled-components";

type TestShitProps = {};

export class TestShit extends Component<TestShitProps> {
  render() {

    const OrangeDiv = styled.div`
        background-color: orange;
    `;

    return <OrangeDiv>Test Shit</OrangeDiv>;
  }
}

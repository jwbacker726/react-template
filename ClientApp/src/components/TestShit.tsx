import React, { Component } from "react";
import styled from "styled-components";

type TestShitProps = {};

export class TestShit extends Component<TestShitProps> {
  render() {

    const OrangeDiv = styled.div`
        padding: 0 10px;
        background-color: orange;
        transition: color 1s 1.5s, background-color 2s, border-radius 2s;

        :hover {
            background-color: blue;
            border-radius: 10px;
            color: white;
        }
    `;

    return <OrangeDiv>Test Shit</OrangeDiv>;
  }
}

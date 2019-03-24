import React, { Component } from "react";
import { OrangeDiv, MyButton, RemoveButton } from "./styledComponents";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./test.scss";

type TestShitProps = {};

type TestShitState = {
  items: string[];
  counter: number;
};

export class TestShit extends Component<TestShitProps, TestShitState> {
  constructor(props: TestShitProps) {
    super(props);

    this.state = {
      items: ["One", "Two", "Foure"],
      counter: 1
    };
  }

  render() {
    const items = this.state.items.map((item, index) => {
      return (
        <div key={item} onClick={() => this.removeItem(item)}>
          <div key={item}>{item}</div>
        </div>
      );
    });

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={600}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName="spicy"
        >
          {items}
        </ReactCSSTransitionGroup>
        <MyButton onClick={() => this.addItem("foobar")}>Add Item</MyButton>
        <OrangeDiv>Test Shit</OrangeDiv>
      </div>
    );
  }

  removeItem(item: string) {
    const newItems = this.state.items.filter(i => i !== item);
    this.setState(Object.assign({}, this.state, { items: newItems }));
  }

  addItem(item: string) {
    const realItem = item + " " + this.state.counter;
    const newItems = [...this.state.items, realItem];
    this.setState(
      Object.assign({}, this.state, {
        items: newItems,
        counter: this.state.counter + 1
      })
    );
  }
}

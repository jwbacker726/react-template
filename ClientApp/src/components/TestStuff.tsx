import React, { Component, Suspense } from "react";
import {
  OrangeDiv,
  MyButton,
  AnimationHost,
  MyMessage
} from "./styledComponents";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./test.scss";
const AnotherComponent = React.lazy(() => import("./AnotherComponent"));
import { UsesHooks, test } from "./hook";

type TestStuffProps = {};

type TestStuffState = {
  items: string[];
  counter: number;
  showSomething: boolean;
};

export class TestStuff extends Component<TestStuffProps, TestStuffState> {
  constructor(props: TestStuffProps) {
    super(props);

    this.state = {
      items: ["One", "Two", "Foure"],
      counter: 1,
      showSomething: false
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
        {/* can't use this here */}
        {/* {test("bbbbbbbb")} */}
        <Suspense fallback={<div>Loading...</div>}>
          <UsesHooks />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <AnotherComponent />
        </Suspense>
        <h3>Animating a list:</h3>
        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={250}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName="test"
        >
          {items}
        </ReactCSSTransitionGroup>
        <MyButton onClick={() => this.addItem("foobar")}>Add Item</MyButton>
        <OrangeDiv>Test stuff</OrangeDiv>
        <h3>Animating a single item:</h3>
        <AnimationHost>
          <ReactCSSTransitionGroup
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionName="something"
          >
            {this.getSomething()}
          </ReactCSSTransitionGroup>
        </AnimationHost>
        <div>Just here to see when stuff is removed from the DOM</div>
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
    const showSomething = this.state.counter % 2 === 0;

    this.setState(
      Object.assign({}, this.state, {
        items: newItems,
        showSomething,
        counter: this.state.counter + 1
      })
    );
  }

  getSomething() {
    if (this.state.showSomething) {
      return <MyMessage key="something">Something</MyMessage>;
    } else {
      return <MyMessage key="nothing">Nothing</MyMessage>;
    }
  }
}

import React, { Component, Suspense } from "react";
import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { TestStuff } from "./components/TestStuff";

const LotsOfImports = React.lazy(() => import("./components/LotsOfImports"));

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Suspense fallback={<h2 style={{ color: "red" }}>Loading...</h2>}>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/fetch-data" component={FetchData} />
          <Route path="/test-stuff" component={TestStuff} />
          <Route path="/lots" component={LotsOfImports} />
          <Route path="/test" component={() => (
              <div>
                <Suspense fallback="Loading">
                    <LotsOfImports name="foo" />
                </Suspense>
              </div>
            )}
          />
        </Suspense>
      </Layout>
    );
  }
}

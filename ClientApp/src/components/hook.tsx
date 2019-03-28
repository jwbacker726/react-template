import React, { useState, useEffect } from "react";

export function UsesHooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // component did mount *and* component did update
  useEffect(() => {
    console.log("useEffect");

    // Can return a funtion that gets called when
    // the component unmounts (remove event listeners, etc.)
    return () => console.log("cleanup code here");
  }, [count]); // let us know when count updates

  return (
    <div>
      {test("zzzzzzzzzzz")}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export function test(name: string) {
  const [count, setCount] = useState(0);

  // component did mount *and* component did update
  useEffect(() => {
    console.log("useEffect 2");

    // Can return a funtion that gets called when
    // the component unmounts (remove event listeners, etc.)
    return () => console.log("cleanup code here");
  }, [count]); // let us know when count updates

  return <div>{name}</div>;
}

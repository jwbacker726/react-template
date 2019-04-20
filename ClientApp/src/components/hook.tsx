import React, { useState, useEffect } from "react";

export const UsesHooks = (props: { favoriteCollegeBasketballTeam: string }) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // component did mount *and* component did update
  useEffect(() => {
    console.log("make api call here");

    // Can return a funtion that gets called when
    // the component unmounts (remove event listeners, etc.)
    return () => console.log("cleanup code here");
  }, [count]); // let us know when count updates

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
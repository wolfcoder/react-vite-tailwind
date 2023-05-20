// import useState
import { useState } from "react";

export default function CopyBy() {
  let [title, setTitle] = useState({one: "Belajar React JS", two: "React JS itu mudah"});
  let foo = { title: "CopyBy" };
  let bar = { ...foo };

  console.log(foo);
  console.log(bar);
  bar.title = "CopyBy 2";
  console.log(foo);
  console.log(bar);

  console.log(foo === bar);

  // create handle click function
  const handleClick = () => {
    let newTitle = title;

    console.log(newTitle);
    newTitle.one = "change the title";
     
    setTitle({...newTitle});

  };

  return (
    <>
      <h1>{foo.title}</h1>
      <h1>{bar.title}</h1>
      <h2>{title.one}</h2>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

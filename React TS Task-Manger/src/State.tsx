import { useState } from "react";

const State = () => {
  const [text, setText] = useState<string>("shakeAndBake");
  const [list, setList] = useState<string[]>([]);
  const array: string[] = [];

  function toggleText() {
    setText((prevText) =>
      prevText === "TypeScript" ? "shakeAndBake" : "TypeScript"
    );
    const numberString = (Math.random() * 10).toFixed(0).toString();

    setList((prev) => [...prev, numberString]);
  }

  console.log(list);

  return (
    <div>
      <h2 className="mb-1">{text}</h2>
      <button className="btn btn-center" onClick={toggleText}>
        click me
      </button>
    </div>
  );
};

export default State;

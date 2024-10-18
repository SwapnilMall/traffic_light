import { useState } from "react";

const Test = () => {
  const [a, setA] = useState("");
  const btn = [1, 2, 3, 4, 5, 6, 7];

  const getStyle = (id) => {
    if (id === a) {
      return { color: "red" };
    }
  };

  return (
    <div>
      {btn.map((item) => {
        return (
          <button style={getStyle(item)} onClick={() => setA(item)} key={item}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Test;

import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [a, setA] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setA(a + 1);
    }, 1000);
  }, [a]);

  const getStyle = (colorTake) => {
    return { backgroundColor: colorTake };
  };

  return (
    <div className={styles.MainContainer}>
      <div
        className={styles.lightColor}
        style={a % 3 === 1 ? getStyle("red") : getStyle("grey")}
      />
      <div
        className={styles.lightColor}
        style={a % 3 === 2 ? getStyle("yellow") : getStyle("grey")}
      />
      <div
        className={styles.lightColor}
        style={a % 3 === 0 ? getStyle("green") : getStyle("grey")}
      />
    </div>
  );
}

export default App;

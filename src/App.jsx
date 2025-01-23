import { useState, useCallback, useMemo } from "react";
import ViewCounter from "./components/ViewCounter";
import ViewText from "./components/ViewText";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "gemy" });

  const counterHandler = () => {
    setCount(count + 1);
  };

  // React.memo => memo(component)
  // use Memo (Object , Array, Function return) => Value
  const name = useMemo(() => {
    return user;
  }, [user]);

  // useCallback (callback Function) => function
  const ageHandler = useCallback(() => {
    setUser((prev) => {
      if (prev.age) {
        return prev;
      } else {
        return { ...prev, age: 30 };
      }
    });
  }, []);

  console.log("app");
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <ViewCounter counter={count} counterHandler={counterHandler} />
      <ViewText text={name} addAge={ageHandler} />
    </div>
  );
}

export default App;

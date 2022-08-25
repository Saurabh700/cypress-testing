import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    let payload = {
      value: count + 1,
    };
    // jab bhi post karte hai to response main apneko vahi milta hai jo main bhejunga
    axios
      .post("http://localhost:8080/count", payload)
      .then((res) => {
        console.log(res, "res from post");
        setCount(res.data.value);
      })
      .catch((err) => console.log(err, "error from post"));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/count")
      .then((res) => {
        console.log(res, "get response");
        setCount(res.data.value);
      })
      .catch((err) => console.log(err, "get error"));
  }, []);

  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <button className="addCount" onClick={handleAdd}>
        +
      </button>
      {/* <button className="addCount" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button> */}
    </div>
  );
}

export default App;

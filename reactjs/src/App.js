import { useState, createContext } from "react";
import TodoApp from "./Todo/TodoApp";
import CompA from "./ContextTopic/CompA"

const context = createContext();

function App() {
  const [data, setData] = useState("mango");
  return (
    <div className="App">
      <h1><u>
        React Js
      </u></h1>
      <ul>
        <li>
          <TodoApp />
        </li>
        <br />
        <li>
          <context.Provider value={data}>

            <CompA />
          </context.Provider>
        </li>
      </ul>
    </div>
  );
}

export default App;
export {context};

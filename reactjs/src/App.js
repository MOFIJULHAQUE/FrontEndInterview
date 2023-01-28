import { useState, createContext } from "react";
import TodoApp from "./Todo/TodoApp";
import CompA from "./ContextTopic/CompA"
import Main from "./Modal/Main";
import Timer from "./Timer/Timer"
import "./Modal/style.css";

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
        <li>
          <Timer/>
        </li>
        <li>
        {/* Modal */}
          <Main />
        </li>
        
      </ul>
    </div>
  );
}

export default App;
export { context };

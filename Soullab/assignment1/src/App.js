import Middlesection from "./components/Middlesection";
import RightSideSection from "./components/RightSideSection";
import Sidebar from "./components/Sidebar"

import "./styles/App.css"

function App() {
  return (
    <>

      <div className="container">
        <Sidebar />
        <Middlesection />
        <RightSideSection />
      </div>
    </>
  );
}

export default App;

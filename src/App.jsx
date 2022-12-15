import Home from "./page/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import Todo from "./page/Todo/Todo";
import Memo from "./page/Memo/Memo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/memo" element={<Memo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

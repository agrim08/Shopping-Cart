import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="mb-4">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

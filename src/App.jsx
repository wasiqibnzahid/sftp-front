import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="page-container w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search/:text" element={<Search />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

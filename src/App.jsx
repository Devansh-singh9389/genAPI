import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Pages/Home";
import Pricing from "./components/Pages/Pricing";
import Detail from "./components/Pages/Detail";
import NavBar from "./components/elements/NavBar";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";


function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-200">
      <NavBar />

      <main className="bg-slate-300/20 min-h-screen">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>

        {/* Floating login window */}
        {location.pathname === "/login" && <Login />}
      </main>

      <footer className="mt-10 py-6 text-center border-t border-gray-700 text-gray-400">
        <p className="text-sm">
          ⚡ API Generator © {new Date().getFullYear()} | Built with React & Bootstrap
        </p>
      </footer>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Pages/Home";
import Pricing from "./components/Pages/Pricing";
import Detail from "./components/Pages/Detail";
import NavBar from "./components/elements/NavBar";
import About from "./components/Pages/About";
import SignIn from "./components/Pages/SignIn";
import Projects from "./components/Pages/Projects";
import Blog from "./components/Pages/Blog";
import Login from "./components/Pages/Login";
import APIgen from "./components/APIgen/APIgen";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-200">
      <NavBar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/start" element={<APIgen/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

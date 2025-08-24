import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Pages/Home';
import Pricing from './components/Pages/Pricing';
import Detail from './components/Pages/Detail';
import NavBar from './components/elements/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-200">

      <BrowserRouter >
        <NavBar />

        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Price" element={<Pricing />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </main>


        <footer className="mt-10 py-6 text-center border-t border-gray-700 text-gray-400">
          <p className="text-sm">
            ⚡ API Generator © {new Date().getFullYear()} | Built with React & Bootstrap
          </p>
        </footer>

      </BrowserRouter>

    </div>
  )
}

export default App

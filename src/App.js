import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import LangProvider from "./components/LangProvider";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </LangProvider>
    </BrowserRouter>
  );
}

export default App;

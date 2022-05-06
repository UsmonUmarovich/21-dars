import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Navbar } from "./Components/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/homepage";
import About from "./pages/about";

function App() {
  return (
    <>
      <header className="font-quicksand">
        <Navbar />
      </header>
      <main className="min-h-screen w-full font-quicksand text-text">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
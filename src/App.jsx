import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/homepage";
import About from "./pages/about";
import ErrorPage from "./pages/error";
import Movies from "./pages/movies";
import Faq from "./pages/faq";
import Product from "./pages/product";
import { ProductProvider } from "./context/ProductContext";
import Events from "./pages/events";
import Partnership from "./pages/partnership";


function App() {
  return (
    <ProductProvider>
      <header className="font-quicksand">
        <Navbar />
      </header>
      <main className="min-h-screen w-full font-quicksand text-text">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </ProductProvider>
  )
}

export default App;
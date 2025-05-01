import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Componentes
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
// Estilos
import "./estilos/App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App





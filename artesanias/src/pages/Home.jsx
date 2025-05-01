import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import "../estilos/Home.css"

function Home() {
  // Usando los mismos productos que están en la página de productos
  const featuredProducts = [
    {
      id: 1,
      name: "Alfajor Vegano",
      price: 4500,
      image: "https://acdn-us.mitiendanube.com/stores/137/307/products/img_006000-alfajor-mani-y-frambuesa-v1-00886e471e5cadcf1e16368134933035-1024-1024.webp",
      description: "Alfajor elaborado con una suave galleta a base de nueces y aceite de coco, relleno con pasta de maní y centro de confitura de frambuesas casera y bañado con chocolate 70 % cacao agroecológico ecuatoriano.",
    },
    {
      id: 12,
      name: "Mesa ratona",
      price: 45000,
      image: "https://www.dealgarrobo.com/img/upload/imagen_small_96.webp",
      description: "Este producto es versátil y estético para tu living",
    },
    {
      id: 13,
      name: "Placar",
      price:75000,
      image: "https://www.dealgarrobo.com/img/upload/imagen_small_184.webp",
      description: "Este producto es muy amplio para organizar de manera sencilla tu vestidor.",
    },
  ]

  return (
    <div className="home">
      {/* Hero Section - Eliminado el hero-background */}
      <section
        className="hero"
        style={{
          backgroundColor: "#78350F",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1604849329122-7c9be9b7bb5e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">Breve Intro Emprendimiento</h1>
            <p className="hero-description">
            En Raíces Dulces, encontraras muebles autenticos con detalles que solo el trabajo artesanal te puede ofrecer y como tambien variedades de alfajores para saborear
            </p>
            <div className="hero-buttons">
              {/* Solo dejamos el botón "Ver Productos" */}
              <Link to="/productos" className="button button-primary">
                Ver Productos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Presentación del Negocio */}
      <section className="business-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2 className="section-title">Tradición en Madera y Dulce</h2>
              <p className="section-description">
              Desde 1990,en Raíces Dulces, la madera y los sabores se transforman en piezas únicas.
              Cada mueble de algarrobo cuenta con una historia y cada alfajor guarda un secreto familiar.Más de tres décadas creando con amor piezas que endulzan la vida y decoran hogares.
              </p>
              {/* Volvemos a dejar solo el botón original */}
              <Link to="/sobre-nosotros" className="button button-primary">
                Conoce Más Sobre Nosotros
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="button-icon"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            <div className="intro-image-container">
              <img
                src="https://imgs.search.brave.com/-s0P9aeKmjCPyw666pWNtbuREw5NUXAY7vjtS-HfGd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRjLzJm/LzA5LzRjMmYwOTBk/N2MzYzIzN2EyMzhj/OGMyMDBjNTNmYTJj/LmpwZw"
                alt="Artesano"
                className="intro-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Productos Destacados</h2>
          <p className="section-description">Descubre nuestra selección de piezas artesanales más populares</p>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="view-all-container">
            <Link to="/productos" className="button button-primary">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
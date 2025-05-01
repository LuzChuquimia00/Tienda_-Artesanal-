"use client"

import { useState } from "react"
import "../estilos/Products.css"

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("")
  
  // (Mantengo el mismo array de productos que tenías originalmente)
  const [products] = useState([
    {
      id: 1,
      name: "Alfajor Vegano",
      price: 4500,
      image: "https://acdn-us.mitiendanube.com/stores/137/307/products/img_006000-alfajor-mani-y-frambuesa-v1-00886e471e5cadcf1e16368134933035-1024-1024.webp",
      description: "Alfajor elaborado con una suave galleta a base de nueces y aceite de coco, relleno con pasta de maní y centro de confitura de frambuesas casera y bañado con chocolate 70 % cacao agroecológico ecuatoriano.",
    },
    {
      id: 14,
      name:"Alfajor bañado en chocolate blanco",
      price: 3800,
      image: "https://acdn-us.mitiendanube.com/stores/137/307/products/alfajor-banado-en-choco-blanco1-a1b9ca0283953a358416205730356475-640-0.webp",
      description: "Alfajor de una suave masa elaborada de forma artesanal una por una, relleno de dulce de leche y bañado en chocolate blanco aromatizado con vainilla natural.",
    },
    {
      id: 3,
      name:"Alfajor bañado en chocolate negro",
      price: 3800,
      image: "https://acdn-us.mitiendanube.com/stores/137/307/products/img_006006-alfajor-ddl1-728092bd2b6f71a61116368128445598-1024-1024.webp",
      description: "Alfajor de una suave masa elaborada artesanalmente una por una, relleno de dulce de leche y bañado en chocolate negro 70% cacao agroecológico.La combinación del chocolate, el dulce de leche y la galleta logran un equilibrio justo y único. ",
    },
    {
      id: 5,
      name: "Extra blend",
      price: 4000,
      image: "https://acdn-us.mitiendanube.com/stores/003/407/409/products/dsc_5156-b-8d2586e6c1f64b1b2a17332492193908-480-0.webp",
      description: "Masa de cacao, relleno de dulce de leche y corazón de mermelada de frambuesa, bañado con chocolate semiamargo.",
    },
    {
      id: 4,
      name: "Intenso Blanco",
      price: 4000,
      image: "https://acdn-us.mitiendanube.com/stores/003/407/409/products/dsc_5152-b-8801dbbe8be905f29317332492960768-480-0.webp",
      description: "Masa de cacao, relleno de dulce de leche y bañado con chocolate blanco.",
    },
    {
      id: 6,
      name: "Intenso Negro",
      price: 4000,
      image: "https://acdn-us.mitiendanube.com/stores/003/407/409/products/dsc_5154-b-8c7e58474e9942824817332492712243-480-0.webp",
      description: "Masa de cacao, relleno de dulce de leche y bañado con chocolate semiamargo.",
    },
    {
      id: 7,
      name: "Alfajores Cacao con Dulce de Leche",
      price: 9000,
      image: "https://imgs.search.brave.com/SSXZzoZZ_SGtU0_cHdSWOTuNyC6T9yfGAqcJ0-NE9mk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcnJh/YmFsYXJnZW50aW5v/LmNvbS5hci93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wOC9h/bGZham9yXzcwLWNv/cGlhLTItMzI0eDMy/NC5qcGc",
      description: "Alfajor de Chocolate Relleno con Extra Dulce de Leche Bañado con Chocolate Amargo",
    },
    {
      id: 8,
      name: "Mesita de luz",
      price: 30000,
      image: "https://www.dealgarrobo.com/img/upload/mesas-de-luz-algarrobo.webp",
      description: "Este producto tiene un diseño elegante, almacenaje práctico y estilo que complementa cualquier dormitorio",
    },
    {
      id: 9,
      name: "Escritorio",
      price: 30000,
      image: "https://www.dealgarrobo.com/img/upload/escritorios-algarrobo.webp",
      description: "Este escritorio tiene un amplio espacio de trabajo para un dormitorio",
    },
    {
      id: 10,
      name: "Alacena",
      price: 20000,
      image: "https://www.dealgarrobo.com//img/upload/imagen_small_189.webp",
      description: "Este producto es práctico y amplio para almacenar,con un diseño versátil y con detalles que realzan tu cocina",
    },
    {
      id: 11,
      name: "Juego de comedor",
      price: 80000,
      image: "https://www.dealgarrobo.com/img/upload/foto_226_467.webp",
      description: "Este producto es elegante y funcional.Es de máxima durabilidad y confort para tus momentos especiales con la familia.",
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
    {
      id: 2,
      name: "Sillón",
      price: 84000,
      image: "https://www.dealgarrobo.com/img/upload/imagen_small_181.webp",
      description: "Este producto es ideal para relajarte con la comodidad que tiene para nuestros clientes.",
    },
  ])

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="products-container">
      {/* Encabezado con tira marrón */}
      <header className="products-header">
        <h1 className="products-title">Nuestros Productos</h1>
        <p className="products-description">Descubre nuestra colección única</p>
        
        {/* Buscador (manteniendo el mismo diseño) */}
        <div className="products-search">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      {/* Grid de productos */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible'
                  }}
                />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toLocaleString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No se encontraron productos</p>
        )}
      </div>
    </div>
  )
}

export default Products
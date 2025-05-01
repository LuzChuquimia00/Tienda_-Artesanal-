import "../estilos/ProductCard.css"

function ProductCard({ product }) {
  // Verificar que product y price existan para evitar errores
  const price = product && product.price ? product.price.toLocaleString() : "Precio no disponible"

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${price}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
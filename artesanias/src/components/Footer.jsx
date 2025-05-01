import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../estilos/Footer.css"

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const paymentMethods = [
        {
            image: "data:image/png;base64,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",
            alt: "MercadoPago"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOhyP14WDo8ezDckSTrgYWpKUQPn-XBn07g&s",
            alt: "Visa"
        },
        {
            image: "http://cdn2.downdetector.com/static/uploads/logo/mastercard.jpg",
            alt: "MasterCard"
        },
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setEmail('');
        setTimeout(() => {
            setSubscribed(false);
        }, 3000);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h3>Sobre Nosotros</h3>
                    <p>Raíces Dulces - Artesanías tradicionales con amor y dedicación.</p>
                </div>

                <div className="footer-section quick-links">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
                <div className="footer-section payment-methods">
                    <h3>Métodos de Pago</h3>
                    <div className="payment-icons">
                        {paymentMethods.map((method, index) => (
                            <img 
                                key={index}
                                src={method.image} 
                                alt={method.alt}
                                className="payment-icon"
                            />
                        ))}
                    </div>
                </div>

                <div className="footer-section subscribe">
                    <h3>Suscríbete</h3>
                    {!subscribed ? (
                        <form onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Suscribirse</button>
                        </form>
                    ) : (
                        <div className="success-message">¡Gracias por suscribirte!</div>
                    )}
                </div>
            </div>

            <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4267B2">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E1306C">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                </a>
                <a href="mailto:info@raicesdulces.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D44638">
                        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                    </svg>
                </a>
            </div>

            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Raíces Dulces. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
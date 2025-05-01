"use client"

import { useState } from "react"
import "../estilos/Contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setFormSubmitted(true)

        setTimeout(() => {
            setFormSubmitted(false)
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
        }, 3000)
    }

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contacto</h1>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contáctanos</h2>
                    <p>Estamos aquí para responder cualquier pregunta que puedas tener.</p>

                    <div className="info-item">
                        <span className="info-icon">📍</span>
                        <div>
                            <h3>Dirección</h3>
                            <p>Obelisco
                            Av. Corrientes, C1035 Cdad. Autónoma de Buenos Aires</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">📞</span>
                        <div>
                            <h3>Teléfono</h3>
                            <p>+54 11 1234-5678</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">✉️</span>
                        <div>
                            <h3>Email</h3>
                            <p>info@raicesdulces.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">⏰</span>
                        <div>
                            <h3>Horarios</h3>
                            <p>Lunes a Viernes: 9:00 - 18:00</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Envíanos un mensaje</h2>

                    {formSubmitted ? (
                        <div className="success-message">
                            <p>¡Mensaje enviado con éxito!</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Asunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                Enviar mensaje
                            </button>
                        </form>
                    )}
                </div>
            </div>
                
            <div className="map-container">
                <h2>Nuestra dirección</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895485!2d-58.38375908495731!3d-34.60373446500542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1650000000000!5m2!1ses!2sar"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Raíces Dulces"
                ></iframe>
            </div>
        </div>
    )   
}   

export default Contact
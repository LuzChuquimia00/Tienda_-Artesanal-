import PageHeader from "../components/PageHeader"
import "../estilos/AboutUs.css"
import logo from '../imagenes/logoRaicesDulces.png'
import alfajor from '../imagenes/ALFAJOR SOBRE NOSOTROS.png'
import silla from '../imagenes/trabajo2.png'
function AboutUs() {
  return (
    <div className="about-page">
      <PageHeader
        title="Sobre Nosotros"
        description="Conoce nuestra historia y el proceso artesanal"
      />

      {/* Historia */}
      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <div className="history-text">
              <h2 className="section-title">Nuestra Historia</h2>
              <div className="history-paragraphs">
                <p>
                Desde 1990, Raíces Dulces combina la calidez de la madera de algarrobo con el placer de los alfajores caseros. 
                Nuestros muebles artesanales destacan por su rusticidad y durabilidad, tallados a mano para crear piezas únicas.
                Paralelamente, nuestros alfajores conservan el sabor de siempre, elaborados con ingredientes naturales y recetas tradicionales.
                </p>
                <p>
                En nuestro taller, cada creación sigue procesos cuidadosos.La madera se trabaja respetando su esencia, mientras los alfajores se hornean con el mismo esmero de antaño.
                Dos expresiones artesanales distintas, unidas por un mismo principio: ofrecer productos auténticos que trasmitan calidez y sencillez.
                </p>
              </div>
            </div>
            <div className="history-image-container">
              <img
                src={logo}
                alt="Creador de Raíces Dulces"
                className="history-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Artesanal */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Nuestro Proceso Artesanal</h2>
          <p className="section-description">
            Nuestros productos mobiliarios son fabricados manualmente con madera de algarrobo puro y 
            también nuestros postres dulces se elaboran de manera artesanal con distintos tipos de chocolates.
          </p>

          {/* Proceso Madera de Algarrobo */}
          <div className="process-with-image">
            <div className="process-content">
              <h3 className="process-subtitle">Madera de Algarrobo</h3>
              <div className="process-steps">
                {[
                  {
                    title: "Selección de troncos",
                    description: "Escogemos solo algarrobos maduros de bosques sostenibles, verificando su densidad y vetas naturales"
                  },
                  {
                    title: "Secado natural",
                    description: "Curamos la madera lentamente bajo sombra durante meses para garantizar estabilidad y durabilidad"
                  },
                  {
                    title: "Tallado manual",
                    description: "Nuestros artesanos transforman cada pieza con herramientas tradicionales, respetando la fibra natural"
                  },
                  {
                    title: "Acabado ecológico",
                    description: "Aplicamos ceras vegetales que realzan la tonalidad miel del algarrobo sin químicos agresivos"
                  }
                ].map((paso, index) => (
                  <div key={`algarrobo-${index}`} className="process-step">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <h4 className="step-title">{paso.title}</h4>
                      <p className="step-description">{paso.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="process-image-container">
              <img
                src={silla}
                alt="Proceso madera de algarrobo"
                className="process-image"
              />
            </div>
          </div>
              
          {/* Proceso Alfajores Artesanales */}
          <div className="process-with-image reverse">
            <div className="process-content">
              <h3 className="process-subtitle">Alfajores Artesanales</h3>
              <div className="process-steps">
                {[
                  {
                    title: "Materias primas puras",
                    description: "Usamos miel de campo, harina orgánica y dulce de leche casero sin conservantes"
                  },
                  {
                    title: "Amasado lento",
                    description: "Mezclamos los ingredientes a mano, respetando los tiempos de reposo para una textura perfecta"
                  },
                  {
                    title: "Cocción en horno de barro",
                    description: "Horneamos a fuego moderado para lograr ese crujiente dorado y aroma ahumado característico"
                  },
                  {
                    title: "Armado tradicional",
                    description: "Rellenamos cada alfajor con generosidad y los bañamos en chocolate negro de origen ético"
                  }
                ].map((paso, index) => (
                  <div key={`alfajores-${index}`} className="process-step">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <h4 className="step-title">{paso.title}</h4>
                      <p className="step-description">{paso.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="process-image-container">
              <img
                src={alfajor}
                alt="Proceso alfajores artesanales"
                className="process-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
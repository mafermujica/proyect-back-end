import React from 'react';

function App() {

    return (
    <><div className="App">
            <header className="App-header">
                <nav id="navbar">
                    <a href="#inicio"><h1 id="logo">Eco Turismo Venezuela</h1></a>
                    <ul>
                        <li><a href="#nosotros">Quienes Somos</a></li>
                        <li><a href="#lugares">Lugares especiales</a></li>
                        <li><a href="#galeria">Galería</a></li>
                        <li><a href="#seguir">Seguir</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </div><main>
                <section id="inicio" className="inicio">
                    <h2>Más que un viaje, una travesía terrestre.</h2>
                    <h3>Descubre tu país en rutas asombrosas y precios flexibles.</h3>
                    <a id="contacto" href="#contacto">
                        <button className="cta-button">Reserva Ahora</button>
                    </a>
                </section>
                <section id="lugares">
                    <header className="lugares-head">
                        <h2>Explora, conéctate, viaja por tierra.</h2>
                        <h3>
                            Le ayudaremos a crear una solución a medida que sea específica para
                            sus necesidades.
                        </h3>
                    </header>
                </section>
                <section id="galeria">
                    <header className="galeria">
                        <h2>Destinos locales</h2>
                        <h3>Explora el rincón más hermoso de la Tierra.</h3>
                    </header>
                    <div className="cards">
                        <div className="card">
                            <div className="card-icon">
                                <img
                                    src="../../public/img/playa.jpg"
                                    alt="playa morrocoy"
                                    aria-hidden="true"
                                    loading="lazy" />
                            </div>
                            <h4>Playa</h4>
                            <p>Huellas en la arena y recuerdos en tu corazón</p>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <img
                                    src="../../public/img/medanos.jpg"
                                    alt="medanos coro"
                                    aria-hidden="true"
                                    loading="lazy" />
                            </div>
                            <h4>Desierto</h4>
                            <p>Siente la brisa del paraíso acariciando tu piel.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <img
                                    src="../../public/img/gransabana3.jpg"
                                    alt="gran sabana"
                                    aria-hidden="true"
                                    loading="lazy" />
                            </div>
                            <h4>Selva y sabana</h4>
                            <p>Desconexión total y belleza incomparable te esperan.</p>
                        </div>
                    </div>
                </section>
                <section id="seguir">
                    <header className="seguir-head">
                        <h2>Síguenos</h2>
                        <h3>
                            Únete a nuestra comunidad en redes sociales y descubre un mundo de
                            experiencias, noticias y momentos únicos. ¡Síguenos para ser parte
                            de nuestra historia y conectarnos juntos!
                        </h3>
                    </header>
                </section>
                <section id="contacto">
                    <div className="contacto">
                        <header className="contacto-head">
                            <h2>Contactanos</h2>
                            <h3>
                                ¡Estamos aquí para ayudar! Envíenos cualquier pregunta que tenga.
                                Esperamos con interés escuchar de usted.
                            </h3>
                        </header>
                        {/* Email.js form */}
                        <form id="formulario-contacto">
                            <div className="nombre-form">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Ingresa tu nombre"
                                    required />
                            </div>
                            <div className="telefono-form">
                                <label htmlFor="telefono">Teléfono:</label>
                                <input
                                    type="telefono"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="Ingresa tu número telefónico"
                                    required />
                            </div>
                            <div className="email-form">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Ingresa tu email"
                                    required />
                            </div>
                            <div className="mensaje-form">
                                <label htmlFor="mensaje">Mensaje:</label>
                                <textarea
                                    id="mensaje"
                                    cols="30"
                                    rows="7"
                                    placeholder="Ingresa tu mensaje"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="cta-button">Enviar</button>
                        </form>
                    </div>
                </section>
            </main></>
    );
}

export default App;

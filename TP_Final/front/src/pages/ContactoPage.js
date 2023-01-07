// import React from 'react';
import '../styles/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono" />
                    </p>
                    <p>
                        <label for="mensaje">Comnetarios</label>
                        <input type="text" name="mensaje" />
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de contacto</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Telefono:123456789</li>
                    <li>Email:</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;
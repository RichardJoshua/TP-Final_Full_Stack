// import React from 'react';
import '../styles/pages/HomePage.css';

const HomePage = (props) => {
    return (

        <main className="holder">

            <div class="container" id="gustos">
                <div class="row">
                    <div class="col-md-6 col-xl-3" style={{marginBottom: "40px"}}>
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card">
                            <img src="images/home/card-3.jpeg" class="card-img-top" alt="Transportes X"/>
                            <div class="card-body">
                                <h3>Expresso</h3>
                                <p class="card-text">7 gramos de café.
                                                    25 segundos de extracción.
                                                    30 ml de café.</p>
                            </div>
                        </div>      
                    </div>
                    <div class="col-md-6 col-xl-3" style={{marginBottom: "40px"}}>
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card">
                            <img src="images/home/card-2.jpeg" class="card-img-top" alt="Transportes X"/>
                            <div class="card-body">
                                <h3>Cafés arábigos</h3>
                                <p class="card-text">Se caracterizan por producir una bebida suave.)</p>
                            </div>
                        </div>      
                    </div>
                    <div class="col-md-6 col-xl-3" style={{marginBottom: "40px"}}>
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card">
                            <img src="images/home/card-4.jpeg" class="card-img-top" alt="Transportes X"/>
                            <div class="card-body">
                                <h3>Latte macchiato</h3>
                                <p class="card-text">Es una taza de leche entera/crema con una pequeña cantidad de café.</p>                                
                            </div>
                        </div>      
                    </div>
                    <div class="col-md-6 col-xl-3" style={{marginBottom: "40px"}}>
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card">
                            <img src="images/home/card-1.jpeg" class="card-img-top" alt="Transportes X"/>
                            <div class="card-body">
                                <h3>Cafés Negro</h3>
                                <p class="card-text">El café negro sin azúcar, leche ni crema.</p>
                            </div>
                        </div>      
                    </div>
                </div>                
            </div>

            <div class="container" id="capuchino">
                <div class="row">
                    <div class="col-md-6 col-xl-6">
                        <img src="images/home/grano-copa.jpg" class="card-img-top" alt="Transportes X"/>
                    </div>                
                    {/* <div class="col-md-6 col-xl-6" style={{display: "flex", align-items: "center"}}> */}
                    <div class="col-md-6 col-xl-6" style={{ display: 'flex', alignItems: 'center'}}>
                        <div class="row" align-middle>
                            <h3>Cappuccino Italiano</h3>
                            <p>El cappuccino Italiano es una bebida preparada con café expreso, leche, chocolate y canela. 
                                Opcionalmente puede llevar también crema de leche. 
                                En Italia se consume casi exclusivamente para el desayuno, 
                                a menudo con bollería; en otros países se consume a lo largo de todo el día o después de la cena.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div class="container-fluid" id="especialidades">
                <div class="row">
                    <h2>Nuestras especialidades</h2>
                    <div class="col-md-6 col-xl-3" style={{marginBottom: "40px"}}>
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card1" style={{padding: "50px"}}>
                            {/* <img src="images/home/card-3.jpeg" class="card-img-top" alt="Transportes X"/> */}
                            <i class="fa-sharp fa-solid fa-spoon" 
                            style={{width: "150px", 
                                    height: "150px", 
                                    fontSize: "100px", 
                                    borderRadius: "75px",
                                    // border: "solid",
                                    background: "white",
                                    padding: "30px 30px 30px 30px",
                                    margin: "auto"}}></i>
                            <h3>Expresso</h3>
                            <div class="card-body">
                                <p class="card-text">El café expreso (también denominado café espresso, café exprés, café express o café solo) es una forma de preparación de café originada en Italia.
                                                    Debe su término a la obtención de esta bebida a través de una cafetera expreso.
                                                    Se caracteriza por su rápida preparación a una alta presión y por un sabor y textura más concentrados.</p>
                            </div>
                        </div>      
                    </div>
                    <div class="col-md-6 col-xl-3" style={{marginBottom: "40px"}}>
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card1" style={{padding: "50px"}}>
                            {/* <img src="images/home/card-3.jpeg" class="card-img-top" alt="Transportes X"/> */}
                            <i class="fa-sharp fa-solid fa-spoon" 
                            style={{width: "150px", 
                                    height: "150px", 
                                    fontSize: "100px", 
                                    borderRadius: "75px",
                                    // border: "solid",
                                    background: "white",
                                    padding: "30px 30px 30px 30px",
                                    margin: "auto"}}></i>
                            <h3>Latte Macchiato</h3>
                            <div class="card-body">
                                <p class="card-text">Preparar un expresso con un chorrito muy pequeño de leche caliente y añadir espuma de leche. Su aspecto manchado le dio su nombre macchiato.</p>
                            </div>
                        </div>      
                    </div>
                    <div class="col-md-6 col-xl-3" style={{marginBottom: "40px"}}>
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card1" style={{padding: "50px"}}>
                            {/* <img src="images/home/card-3.jpeg" class="card-img-top" alt="Transportes X"/> */}
                            <i class="fa-sharp fa-solid fa-spoon" 
                            style={{width: "150px", 
                                    height: "150px", 
                                    fontSize: "100px", 
                                    borderRadius: "75px",
                                    // border: "solid",
                                    background: "white",
                                    padding: "30px 30px 30px 30px",
                                    margin: "auto"}}></i>
                            <h3>Caffè Mocca</h3>
                            <div class="card-body">
                                <p class="card-text">¡Muy rico! Sirva aproximadamente un tercio de espresso, un tercio de leche hervida y un tercio de cacao en un vaso alto. El café Mocca también puede prepararse con 1 ó 2 cucharadas de sirope de chocolate y más leche.</p>
                            </div>
                        </div>      
                    </div>
                    <div class="col-md-6 col-xl-3" style={{marginBottom: "40px"}}>
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card1" style={{padding: "50px"}}>
                            {/* <img src="images/home/card-3.jpeg" class="card-img-top" alt="Transportes X"/> */}
                            <i class="fa-sharp fa-solid fa-spoon" 
                            style={{width: "150px", 
                                    height: "150px", 
                                    fontSize: "100px", 
                                    borderRadius: "75px",
                                    // border: "solid",
                                    background: "white",
                                    padding: "30px 30px 30px 30px",
                                    margin: "auto"}}></i>
                            <h3>Expresso Sorbeto</h3>
                            <div class="card-body">
                                <p class="card-text">Ingredientes (para 4 a 6 porciones): 350 ml de expresso preparado, 4 terrones de azúcar, 450 ml de leche semidesnatada. Verter el expresso en un recipiente de cubitos de hielo y dejarlo congelar hasta que esté rígido. Mezclar el expresso congelado y los demás ingredientes en la batidora durante 3 minutos hasta obtener una mezcla homogenea. O preparar el “sorbeto” en una máquina de helados siguiendo las instrucciones. Servir en copas heladas.</p>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>


            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>lorem10
                        lorem10 


                    </p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
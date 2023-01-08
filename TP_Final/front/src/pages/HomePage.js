// import React from 'react';
import '../styles/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">

            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xl-3">
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card">
                            <img src="images/home/card-3.jpeg" class="card-img-top" alt="Transportes X"/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>      
                    </div>
                    <div class="col-md-6 col-xl-3">
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card">
                            <img src="images/home/card-2.jpeg" class="card-img-top" alt="Transportes X"/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>      
                    </div>
                    <div class="col-md-6 col-xl-3">
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card">
                            <img src="images/home/card-4.jpeg" class="card-img-top" alt="Transportes X"/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>      
                    </div>
                    <div class="col-md-6 col-xl-3">
                        {/* <div class="card"style={{width: "18rem;"}}> */}
                        <div class="card">
                            <img src="images/home/card-1.jpeg" class="card-img-top" alt="Transportes X"/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>      
                    </div>
                </div>                
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xl-6">
                        <img src="images/home/grano-copa.jpg" class="card-img-top" alt="Transportes X"/>
                    </div>                
                    <div class="col-md-6 col-xl-6" style="display: flex; align-items: center;">
                        <div class="row" align-middle>
                            <h3>Capuchino Italiano</h3>
                            <p>lorem10 dsgfdfsgd hs gf ghg hs gs gs s shshh dfj</p>
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
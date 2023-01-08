import React from 'react';
import '../../Header.css';

const Header = (props) => {
    return(
        <header>
            <div className="holder">
                <div>
                    {/* <img src="images/logo.png" with="100" alt="Transportes X"/>
                    <h1>Transportes X</h1> */}
                    
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">         
                            <div class="carousel-item active" data-bs-interval="20000" style={{height: "600px"}}>
                                {/* <img src="..." class="d-block w-100" alt="..."> */}
                                <img src="images/home/main-1.jpeg"  alt="Transportes X"/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Coffee Shop</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000" style={{height: "600px"}}>
                                {/* <img src="..." class="d-block w-100" alt="..."> */}
                                <img src="images/home/main-2.jpeg" alt="Transportes X"/>
                                {/* <img src="images/home/main-2.jpeg" width="100" height="100" alt="Transportes X"/> */}
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
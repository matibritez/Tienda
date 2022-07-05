import React from "react";
import {Link} from "react-router-dom"

const Footer = () =>{
    return(
        <div>
            <footer className="text-white py-4 bg-dark">
                <div className="container justify-content-between">
                    <nav className="row">
                    <Link to="/" className="col-12 col-md-3 d-flex aling-items-center justify-content-center">
                        <img src="./logo2.png" className="mx-2" height="200"/>
                    </Link>
                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="text-center">En este sitio web podras comprar los mejores celulares al mejor precio</li>
                    </ul>
                    
                   
                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold mb-2">Siguenos</li>
                        <li className="d-flex justify-content-between">
                        <i className="bi bi-facebook"/>
                        <i className="bi bi-twitter"/>
                        <i className="bi bi-linkedin"/>
                        <i className="bi bi-instagram"/>
                        </li>
                    </ul> 
                    <div className="container">
                        <p className="text-center">
                            Realizada con ♥ por MB.
                        </p>
                    </div>  
                    </nav>
                </div>
            </footer>
        </div>

    )
}

export default Footer
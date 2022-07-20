import {Navbar,Container,Nav,NavDropdown,} from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import {Link,NavLink} from "react-router-dom"


function navBar(){
    
    return(
        <Navbar className="navbar" bg="dark" expand="lg">
            <Container>
                <NavLink to="/">Tienda De celulares</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Ofertas</NavLink>
                    <NavDropdown title="Categoria" id="basic-nav-dropdown">
                    <NavLink to="/categoria/samsung">Samsung</NavLink>
                    <NavLink to="/categoria/motorola">Motorola</NavLink>
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Link to="/cart"><CartWidget /></Link>
            </Container>
        </Navbar>
    )
}

export default navBar 
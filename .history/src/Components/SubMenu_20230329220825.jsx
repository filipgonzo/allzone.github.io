import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import VentanaSesion from "./VentanaSesion.jsx";

function SubMenu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"> Notebooks </NavDropdown.Item>
                <NavDropdown.Item href="#action4"> Celulares </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  {" "}
                  Televisores{" "}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="menu-opciones">
              <Nav.Link href="#action2">Marketplace</Nav.Link>

              <Nav.Link>Mis Publicaciones</Nav.Link>

              <Nav.Link onClick={handleShow} > Usuario </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <VentanaSesion show={show} handleClose={handleClose}></VentanaSesion>
    </>
  );
}

export default SubMenu;

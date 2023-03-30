import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SubMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="navbarScrollingDropdown" >
            
              <NavDropdown.Item href="#action3"> Notebooks </NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Celulares </NavDropdown.Item>
              <NavDropdown.Item href="#action5"> Televisores </NavDropdown.Item>
            </NavDropdown>
            </Nav>

            <Nav className='menu-opciones'>
              <Nav.Link href="#action2">Marketplace</Nav.Link>

              <Nav.Link>Mis Publicaciones</Nav.Link>

              <Nav.Link> Usuario </Nav.Link>

              <Button variant="outline-success">Iniciar Sesion</Button>
            </Nav>

          
        </Navbar.Collapse>
 


      </Container>
    </Navbar>
  );
}

export default SubMenu;
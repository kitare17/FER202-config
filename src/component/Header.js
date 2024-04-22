import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">
            <Link className='btn' to="/">
                <h1>Brand</h1>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">
            <Link to="/" className='btn'>Home</Link>
          </Nav.Link>
          <Nav.Link href="#">
            <Link to="/" className='btn'>Features</Link>
          </Nav.Link>
          <Nav.Link href="#">
            <Link to="/" className='btn'>Pricing</Link>
          </Nav.Link>
    
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header
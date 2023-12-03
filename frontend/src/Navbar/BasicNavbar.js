import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myLogo from './myLogo.png';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import './BasicNavbar.css';

export default function BasicNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand><img src={myLogo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link style={{ marginLeft: "auto" }}><Login /></Nav.Link>
            <Nav.Link style={{ marginLeft: "auto" }}><Register /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

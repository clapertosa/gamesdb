import {
  Navbar as BNavbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

const Navbar = () => (
  <BNavbar bg="dark" variant="dark" expand="lg">
    <BNavbar.Brand href="#home">GamesDB</BNavbar.Brand>
    <BNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BNavbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Platform" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">PC</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">PlayStation</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Xbox</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#home">Login</Nav.Link>
        <NavDropdown title="User" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </BNavbar.Collapse>
  </BNavbar>
);

export default Navbar;

import {
  Container as BContainer,
  Navbar as BNavbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

const Navbar = () => (
  <BNavbar
    className="justify-content-between"
    bg="dark"
    variant="dark"
    expand="lg"
    style={{ zIndex: 5 }}
  >
    <BContainer>
      <BNavbar.Brand href="/">GamesDB</BNavbar.Brand>
      <BNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Platform" id="basic-nav-dropdown">
            <NavDropdown.Item href="/pc">PC</NavDropdown.Item>
            <NavDropdown.Item href="/playstation">PlayStation</NavDropdown.Item>
            <NavDropdown.Item href="/xbox">Xbox</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#home">Login/SignUp</Nav.Link>
          <NavDropdown title="User" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </BNavbar.Collapse>
    </BContainer>
  </BNavbar>
);

export default Navbar;

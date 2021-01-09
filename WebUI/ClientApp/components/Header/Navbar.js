import PropTypes from "prop-types";
import {
  Container as BContainer,
  Navbar as BNavbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/actions/userActions";
import UserNavbarItem from "./UserNavbarItem";

const Navbar = ({ user }) => {
  const dispatch = useDispatch();

  return (
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
              <NavDropdown.Item href="/playstation">
                PlayStation
              </NavDropdown.Item>
              <NavDropdown.Item href="/xbox">Xbox</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {!user?.userName && <Nav.Link href="/sign">Login/SignUp</Nav.Link>}
            {user?.userName && (
              <NavDropdown
                title={<UserNavbarItem user={user} />}
                id="basic-nav-dropdown"
                alignRight
              >
                <NavDropdown.Item href="dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="settings">Settings</NavDropdown.Item>
                <NavDropdown.Item onClick={() => dispatch(signOut())}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </BNavbar.Collapse>
      </BContainer>
    </BNavbar>
  );
};

Navbar.propTypes = {
  user: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    avatar: PropTypes.string,
    email: PropTypes.string,
    userName: PropTypes.string,
    token: PropTypes.string
  })
};

Navbar.defaultProps = {
  user: {
    isAuthenticated: false,
    avatar: undefined,
    email: undefined,
    userName: undefined,
    token: undefined
  }
};

export default Navbar;

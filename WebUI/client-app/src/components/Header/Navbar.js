/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
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
        <Link className="navbar-brand" to="/">
          GamesDB
        </Link>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <NavDropdown title="Platform" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/pc">
                PC
              </Link>
              <Link className="dropdown-item" to="/playstation">
                PlayStation
              </Link>
              <Link className="dropdown-item" to="/xbox">
                Xbox
              </Link>
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
            {!user?.isAuthenticated && (
              <Link className="nav-link" to="/sign">
                Login/SignUp
              </Link>
            )}
            {user?.isAuthenticated && (
              <NavDropdown
                title={<UserNavbarItem user={user} />}
                id="basic-nav-dropdown"
                alignRight
              >
                <Link className="dropdown-item" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="dropdown-item" to="/settings">
                  Settings
                </Link>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    dispatch(signOut());
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
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

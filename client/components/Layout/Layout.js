import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "../Header/Navbar";

const Container = styled.div``;

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    {children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

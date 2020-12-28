import { Container as BContainer } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "../Header/Navbar";

const Wrapper = styled.div`
  height: 100%;
`;

const Container = styled(BContainer)`
  height: ${({ theme: { headerHeight, contentMarginTop } }) =>
    `calc(100% - ${headerHeight + contentMarginTop}px)`};
  margin-top: ${({ theme: { contentMarginTop } }) => `${contentMarginTop}px`};
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Navbar />
    <Container>{children}</Container>
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

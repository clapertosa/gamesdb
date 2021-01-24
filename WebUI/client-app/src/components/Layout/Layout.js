import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { Container as BContainer } from "react-bootstrap";
import Navbar from "../Header/Navbar";
import {
  getCurrentUser,
  setCurrentUser,
  startRefreshTokenTimer
} from "../../store/actions/userActions";

const Wrapper = styled.div`
  height: 100%;
`;

const Container = styled(BContainer)`
  height: ${({ theme: { headerHeight, contentMarginTop } }) =>
    `calc(100% - ${headerHeight + contentMarginTop}px)`};
  margin-top: ${({ theme: { contentMarginTop } }) => `${contentMarginTop}px`};
`;

const Layout = ({ user, children }) => {
  const dispatch = useDispatch();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized && localStorage.user) {
      const parsedUser = JSON.parse(localStorage.user);
      setInitialized(true);
      dispatch(startRefreshTokenTimer());
      dispatch(setCurrentUser(parsedUser));
      dispatch(getCurrentUser());
    }
  }, [dispatch, initialized, user]);

  return (
    <Wrapper>
      <Navbar user={user} />
      <Container>{children}</Container>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Layout);

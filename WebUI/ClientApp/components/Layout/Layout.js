import { Container as BContainer } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Header/Navbar";
import { setCurrentUser, signOut } from "../../store/actions/userActions";
import axiosInstance from "../../axiosInstance";

const Wrapper = styled.div`
  height: 100%;
`;

const Container = styled(BContainer)`
  height: ${({ theme: { headerHeight, contentMarginTop } }) =>
    `calc(100% - ${headerHeight + contentMarginTop}px)`};
  margin-top: ${({ theme: { contentMarginTop } }) => `${contentMarginTop}px`};
`;

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage?.user;
    if (data)
      axiosInstance
        .get("/user/current_user")
        .then((res) => {
          setCurrentUser(res.data);
          setUser(res.data);
        })
        .catch(() => {
          dispatch(signOut());
          router.push("/");
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    // console.log("user changed", user);
  }, [user]);
  console.log(user);
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

export default Layout;

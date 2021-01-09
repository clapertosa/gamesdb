import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Avatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;

const UserNavbarItem = ({ user }) =>
  user?.avatar ? <Avatar src={user?.avatar} /> : user.userName;

UserNavbarItem.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    userName: PropTypes.string.isRequired,
    token: PropTypes.string
  }).isRequired
};

export default UserNavbarItem;

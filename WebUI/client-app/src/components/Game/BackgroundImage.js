import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Container = styled.div`
  position: absolute;
  top: ${({ theme: { headerHeight } }) => `${headerHeight - 20}px`};
  left: -20px;
  width: 110%;
  background: ${({ imagePath }) => `url(${imagePath})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 485px;
  filter: blur(5px);
  overflow: hidden;
`;

const BackgroundImage = ({ imagePath }) => <Container imagePath={imagePath} />;

BackgroundImage.propTypes = {
  imagePath: PropTypes.string
};

BackgroundImage.defaultProps = {
  imagePath:
    "https://images.igdb.com/igdb/image/upload/t_screenshot_big/ydyq0pixly7vt29fnzci.jpg"
};

export default BackgroundImage;

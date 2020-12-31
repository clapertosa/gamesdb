import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: ${({ imagePath }) => (imagePath ? `url(${imagePath})` : "gray")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;

  span {
    color: white;
    font-weight: bold;
    font-size: 24px;
  }
`;

const Avatar = ({ imagePath, onClick }) => (
  <Container imagePath={imagePath} onClick={onClick}>
    {!imagePath && <span>Select Avatar</span>}
  </Container>
);

Avatar.propTypes = {
  imagePath: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Avatar.defaultProps = {
  imagePath: "",
};

export default Avatar;

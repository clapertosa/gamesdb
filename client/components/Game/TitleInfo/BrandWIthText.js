import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;

  & > span:first-child {
    margin-right: 5px;
  }

  & > span:last-child:hover {
    color: purple;
  }
`;

const getIconClassName = (brand) => {
  switch (brand) {
    case "steam":
      return "icon-steam";
    default:
      return "icon-steam";
  }
};

const BrandWithText = ({ brand, url }) => (
  <Container className="col-4" onClick={() => console.log(url)}>
    <span className={getIconClassName(brand)} />
    <span className="text-capitalize">{brand}</span>
  </Container>
);

BrandWithText.propTypes = {
  brand: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default BrandWithText;

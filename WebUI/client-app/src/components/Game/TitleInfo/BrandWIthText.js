import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: ${({ withMarginBottom }) =>
    withMarginBottom ? "10px" : "0px"};

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

const BrandWithText = ({ brand, url, withMarginBottom }) => (
  <Container
    className="col-4"
    withMarginBottom={withMarginBottom}
    onClick={() => console.log(url)}
  >
    <span className={getIconClassName(brand)} />
    <span className="text-capitalize">{brand}</span>
  </Container>
);

BrandWithText.propTypes = {
  brand: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  withMarginBottom: PropTypes.bool
};

BrandWithText.defaultProps = {
  withMarginBottom: false
};

export default BrandWithText;

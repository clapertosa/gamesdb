import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;

const SectionTitle = ({ children }) => (
  <>
    <Container>{children}</Container>
    <hr className="mt-2 mb-3" style={{ width: "100%" }} />
  </>
);

export default SectionTitle;

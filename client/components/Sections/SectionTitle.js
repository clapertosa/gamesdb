import styled from "styled-components";

const Container = styled.div`
  font-weight: bold;
`;

const SectionTitle = ({ children }) => (
  <>
    <Container className="text-capitalize">{children}</Container>
    <hr className="mt-2 mb-3" />
  </>
);

export default SectionTitle;

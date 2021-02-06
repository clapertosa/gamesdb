import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components/macro";
// import Stats from "./Stats";

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const Poster = styled.img`
  width: 264px;
  height: 352px;
  margin: auto;
  margin-bottom: 10px;
`;

// const RowContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

const PosterInfo = ({ posterPath, followers }) => (
  <Container>
    <Poster src={posterPath} />
    <Button variant="info" style={{ marginBottom: 10 }}>
      Follow
    </Button>
    <span className="text-muted text-center">Followers: {followers}</span>
    {/* <RowContainer>
      <Stats icon="icon-clock-o" title="want" stats={123} />
      <Stats icon="icon-gamepad" title="playing" stats={123} />
      <Stats icon="icon-check-circle" title="played" stats={123} />
    </RowContainer> */}
  </Container>
);

export default PosterInfo;

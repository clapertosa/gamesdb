import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components/macro";
import BrandWithText from "./BrandWIthText";

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: limegreen;
  white-space: nowrap;
`;

const InfoContainer = styled.div`
  font-size: 14px;
  & > span:first-child {
    font-weight: bold;
    text-transform: capitalize;
    margin-right: 5px;
  }

  & > span:last-child {
  }
`;

const PlatformsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TitleInfo = ({
  title,
  releaseDate,
  company,
  genre,
  platforms,
  overview,
  distributions,
  externalLinks
}) => (
  <Container>
    <Title>{title}</Title>
    <h2 style={{ color: "limegreen" }}>
      {moment(releaseDate).format("MMM DD, YYYY")} (
      {moment(releaseDate).fromNow()})
    </h2>
    <h4 style={{ fontStyle: "italic", color: "limegreen" }}>{company}</h4>
    <span
      className="badge bg-primary text-wrap text-white"
      style={{
        marginTop: 105,
        marginRight: "auto",
        fontSize: 15,
        marginBottom: 20
      }}
    >
      About
    </span>
    <InfoContainer>
      <span>genre:</span>
      <span>{genre}</span>
    </InfoContainer>
    <InfoContainer>
      <span>platforms:</span>
      <span>{platforms}</span>
    </InfoContainer>
    <InfoContainer style={{ marginTop: 20, marginBottom: 40 }}>
      <span style={{ fontWeight: "normal" }}>{overview}</span>
    </InfoContainer>
    {/* <PlatformsContainer>
      {distributions.map((d, i) => (
        <BrandWithText key={i} brand={d.title} url={d.url} />
      ))}
    </PlatformsContainer>
    <hr className="mt-2 mb-3" />
    <PlatformsContainer>
      {externalLinks.map((d, i) => (
        <BrandWithText key={i} brand={d.title} url={d.url} withMarginBottom />
      ))}
    </PlatformsContainer> */}
  </Container>
);

TitleInfo.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Date),
  company: PropTypes.string,
  genre: PropTypes.string,
  platforms: PropTypes.string,
  overview: PropTypes.string,
  distributions: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, url: PropTypes.string })
  ),
  externalLinks: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, url: PropTypes.string })
  )
};

TitleInfo.defaultProps = {
  releaseDate: null,
  company: "",
  genre: "",
  platforms: "",
  overview: "",
  distributions: [],
  externalLinks: []
};

export default TitleInfo;

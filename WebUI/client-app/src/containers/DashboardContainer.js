import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import Carousel from "../components/Carousel/Carousel";
import SectionTitle from "../components/Sections/SectionTitle";
import Spinner from "../components/Spinner/Spinner";
import { getDashboardGames } from "../store/actions/dashboardActions";

const Container = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const SectionContainer = styled.div``;

const DashboardContainer = ({ dashboardGames, isAuthenticated }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) dispatch(getDashboardGames());
  }, [dispatch, isAuthenticated]);

  console.log(dashboardGames.followed);

  return dashboardGames.loading ? (
    <Spinner />
  ) : (
    <Container>
      <SectionContainer>
        <SectionTitle>Followed Games</SectionTitle>
        <Carousel
          data={
            dashboardGames.followed?.map((g) => ({
              id: g.igdbId,
              title: g.title,
              genre: g.genres?.map((g) => g.name).join(", "),
              imagePath: g.coverPath?.replace("thumb", "cover_big"),
              overview: g.description
            })) ?? []
          }
        />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Voted Games</SectionTitle>
        <Carousel
          data={
            dashboardGames.voted?.map((g) => ({
              id: g.igdbId,
              title: g.title,
              genre: g.genres?.map((g) => g.name).join(", "),
              imagePath: g.coverPath?.replace("thumb", "cover_big"),
              overview: g.description
            })) ?? []
          }
        />
      </SectionContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  dashboardGames: state.dashboardGames,
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(DashboardContainer);

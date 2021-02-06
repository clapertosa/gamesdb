import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import Carousel from "../components/Carousel/Carousel";
import SectionTitle from "../components/Sections/SectionTitle";
import { getBestGames } from "../store/actions/bestGamesActions";
import { getPopularGames } from "../store/actions/popularGamesActions";
import { getTopRatedMonthGames } from "../store/actions/topRatedMonthGamesActions";

const Container = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 20px;
  }

  & > div:last-child {
    margin-bottom: ${({ theme: { headerHeight } }) => `${headerHeight + 20}px`};
  }
`;

const SectionContainer = styled.div``;

const HomeContainer = ({ popularGames, topRatedMonthGames, bestGames }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularGames());
    dispatch(getTopRatedMonthGames());
    dispatch(getBestGames());
  }, [dispatch]);

  return (
    <Container>
      <SectionContainer>
        <SectionTitle>popular games right now</SectionTitle>
        <Carousel
          data={popularGames.map((g) => ({
            id: g.id,
            title: g.name,
            genre: g.genres?.map((g) => g.name).join(", "),
            imagePath: g.cover?.url?.replace("thumb", "cover_big"),
            overview: g.summary
          }))}
        />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>top rated this month</SectionTitle>
        <Carousel
          data={topRatedMonthGames.map((g) => ({
            id: g.id,
            title: g.name,
            genre: g.genres?.map((g) => g.name).join(", "),
            imagePath: g.cover?.url?.replace("thumb", "cover_big"),
            overview: g.summary
          }))}
        />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>best ever</SectionTitle>
        <Carousel
          data={bestGames.map((g) => ({
            id: g.id,
            title: g.name,
            genre: g.genres?.map((g) => g.name).join(", "),
            imagePath: g.cover?.url?.replace("thumb", "cover_big"),
            overview: g.summary
          }))}
        />
      </SectionContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  popularGames: state.popularGames.games,
  topRatedMonthGames: state.topRatedMonthGames.games,
  bestGames: state.bestGames.games
});

export default connect(mapStateToProps)(HomeContainer);

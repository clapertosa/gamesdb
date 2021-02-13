import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import StarRatings from "react-star-ratings";
import Carousel from "../components/Carousel/Carousel";
import CircularProgressBar from "../components/CircularProgressBar/CircularProgressBar";
import BackgroundImage from "../components/Game/BackgroundImage";
import PosterInfo from "../components/Game/PosterInfo/PosterInfo";
import TitleInfo from "../components/Game/TitleInfo/TitleInfo";
import SectionTitle from "../components/Sections/SectionTitle";
import { getGame } from "../store/actions/gameActions";
import Spinner from "../components/Spinner/Spinner";
import { getGameStats } from "../store/actions/gameStatsActions";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  height: ${({ theme: { headerHeight } }) => `calc(100% - ${headerHeight}px)`};
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  z-index: 1;

  & > div:not(:last-child) {
    margin-right: 10px;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    flex-flow: row;
  }

  .ratings {
    margin-top: 25px;
    width: 100%;
    @media (min-width: 1024px) {
      margin-top: 235px;
    }
  }

  .star-ratings {
    margin: auto;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: ${({ flex }) => flex || 1};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 10px;
  /* font-size: 14px; */
  & > span:first-child {
    font-weight: bold;
    text-transform: capitalize;
    margin-right: 5px;
  }

  & > span:last-child {
  }
`;

const GameContainer = ({ game, stats, loading, isAuthenticated }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGame(id));
    dispatch(getGameStats(id));
  }, [dispatch, id, isAuthenticated]);

  return loading ? (
    <Spinner />
  ) : (
    <Wrapper>
      <BackgroundImage
        imagePath={game?.game?.screenshots?.[0]?.url?.replace("thumb", "1080p")}
      />
      <RowContainer style={{ marginTop: 150 }}>
        <ColumnContainer flex={3}>
          <PosterInfo
            game={game}
            stats={stats}
            posterPath={game?.game?.cover?.url?.replace("thumb", "720p")}
            followers={game?.game?.follows}
          />
        </ColumnContainer>
        <ColumnContainer className="title" flex={4}>
          <TitleInfo
            title={game?.game?.name}
            releaseDate={game?.game?.firstReleaseDate * 1000}
            company={game?.game?.involvedCompanies?.[0]?.company?.name}
            genre={game?.game?.genres?.map((g) => g.name).join(", ")}
            platforms={game?.game?.platforms?.map((p) => p.name).join(", ")}
            overview={game?.game?.summary}
          />
        </ColumnContainer>
        <ColumnContainer className="ratings" flex={3}>
          <CircularProgressBar percentage={Math.floor(game?.game?.rating)} />
          <span
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 10,
              margin: "auto"
            }}
          >
            How would you rate this game?
          </span>
          <StarRatings
            rating={5}
            starRatedColor="#ffe301"
            starHoverColor="#ffe301"
            starDimension="30px"
            changeRating={(rating) => console.log(rating)}
          />
          <hr style={{ width: "100%" }} />
          <InfoContainer>
            <span className="text-capitalize">total ratings</span>
            <span>{game?.game?.ratingCount}</span>
          </InfoContainer>
          <InfoContainer>
            <span className="text-capitalize">Developers</span>
            <span>{game?.game?.involvedCompanies?.[0]?.company?.name}</span>
          </InfoContainer>
          {game?.game?.involvedCompanies?.[0]?.publisher && (
            <InfoContainer>
              <span className="text-capitalize">Publishers</span>
              <span>{game?.game?.involvedCompanies?.[0]?.company?.name}</span>
            </InfoContainer>
          )}
          {game?.game?.gameModes?.length > 0 && (
            <InfoContainer>
              <span className="text-capitalize">GameContainer Modes</span>
              <span>
                {game?.game?.gameModes?.map((g) => g.name).join(", ")}
              </span>
            </InfoContainer>
          )}
          <InfoContainer>
            <span className="text-capitalize">GameContainer Engine</span>
            <span>
              {game?.game?.gameEngines?.map((g) => g.name).join(", ")}
            </span>
          </InfoContainer>
        </ColumnContainer>
      </RowContainer>
      <RowContainer style={{ marginTop: 20 }}>
        <ColumnContainer style={{ minWidth: "100%", minHeight: 0 }}>
          <SectionTitle>Recommended</SectionTitle>
          <Carousel
            data={
              game?.game?.similarGames?.map((g) => ({
                id: g.id,
                title: g.name,
                genre: g.genres?.map((g) => g.name).join(", "),
                imagePath: g.cover?.url?.replace("thumb", "cover_big"),
                overview: g.summary
              })) ?? []
            }
          />
        </ColumnContainer>
      </RowContainer>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({
  game: state.game,
  stats: state.gameStats,
  loading: state.game.loading,
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(GameContainer);

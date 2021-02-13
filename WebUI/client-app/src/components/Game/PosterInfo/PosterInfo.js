import React from "react";
import { Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { followGame } from "../../../store/actions/followGameActions";
import { unfollowGame } from "../../../store/actions/unfollowGameActions";
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

const PosterInfo = ({ game, stats, posterPath, followers, user, loading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(stats);
  const onFollowClick = () => {
    if (!user.isAuthenticated) history.push("/sign");
    if (!stats?.isFollowing) dispatch(followGame(game?.game));
    else dispatch(unfollowGame(game?.game));
  };

  return (
    <Container>
      <Poster src={posterPath} />
      <Button
        variant="info"
        style={{ marginBottom: 10 }}
        disabled={loading}
        onClick={onFollowClick}
      >
        {stats?.isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <span className="text-muted text-center">
        Followers:{" "}
        {stats?.totalFollowers ? followers + stats?.totalFollowers : followers}
      </span>
      {/* <RowContainer>
      <Stats icon="icon-clock-o" title="want" stats={123} />
      <Stats icon="icon-gamepad" title="playing" stats={123} />
      <Stats icon="icon-check-circle" title="played" stats={123} />
    </RowContainer> */}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.followGame.loading
});

export default connect(mapStateToProps)(PosterInfo);

import React from "react";
import styled from "styled-components";
import StarRatings from "react-star-ratings";
import Carousel from "../components/Carousel/Carousel";
import CircularProgressBar from "../components/CircularProgressBar/CircularProgressBar";
import BackgroundImage from "../components/Game/BackgroundImage";
import PosterInfo from "../components/Game/PosterInfo/PosterInfo";
import TitleInfo from "../components/Game/TitleInfo/TitleInfo";
import SectionTitle from "../components/Sections/SectionTitle";

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

const GameContainer = () => (
  <Wrapper>
    <BackgroundImage />
    <RowContainer style={{ marginTop: 150 }}>
      <ColumnContainer flex={3}>
        <PosterInfo />
      </ColumnContainer>
      <ColumnContainer className="title" flex={4}>
        <TitleInfo
          title="CyberPunk 2077"
          releaseDate={new Date()}
          company="CD Projekt RED"
          genre="Role-playing (RPG)"
          platforms={[
            "Xbox One",
            "PlayStation 4",
            "PlayStation 5",
            "PC (Microsoft Windows)",
            "Google Stadia",
            "Xbox Series"
          ]}
          overview="Cyberpunk 2077 is a role-playing video game developed and published by CD Projekt. Adapted from the Cyberpunk franchise, the game is an open world, non-linear RPG with an FPS style in which players are able to heavily customize their character to suit their play style. Gun play, exploration, player choice and activities such as hacking are to feature heavily throughout the game with missions, quests and objectives being completed in a variety of different ways. The world will have dynamic weather and a day/night cycle to make it truly immersive."
          distributions={[
            {
              title: "steam",
              url: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
            },
            { title: "GOG", url: "https://www.gog.com/game/cyberpunk_2077" },
            {
              title: "epic",
              url: "https://www.epicgames.com/store/product/cyberpunk-2077/home"
            }
          ]}
          externalLinks={[
            { title: "website", url: "http://cyberpunk.net/" },
            { title: "website", url: "http://cyberpunk.net/" },
            { title: "website", url: "http://cyberpunk.net/" },
            { title: "website", url: "http://cyberpunk.net/" },
            { title: "website", url: "http://cyberpunk.net/" }
          ]}
        />
      </ColumnContainer>
      <ColumnContainer className="ratings" flex={3}>
        <CircularProgressBar percentage={41} />
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
          <span>10</span>
        </InfoContainer>
        <InfoContainer>
          <span className="text-capitalize">Developers</span>
          <span>CD Projekt</span>
        </InfoContainer>
        <InfoContainer>
          <span className="text-capitalize">Publishers</span>
          <span>CD Projekt</span>
        </InfoContainer>
        <InfoContainer>
          <span className="text-capitalize">GameContainer Modes</span>
          <span>CD Projekt</span>
        </InfoContainer>
        <InfoContainer>
          <span className="text-capitalize">GameContainer Engine</span>
          <span>CD Projekt</span>
        </InfoContainer>
      </ColumnContainer>
    </RowContainer>
    <RowContainer style={{ marginTop: 20 }}>
      <ColumnContainer style={{ minWidth: "100%", minHeight: 0 }}>
        <SectionTitle>Recommended</SectionTitle>
        <Carousel
          data={[
            {
              title: "cyberpunk",
              genre: "action",
              imagePath:
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              overview:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo."
            },
            {
              title: "cyberpunk",
              genre: "action",
              imagePath:
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              overview:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo."
            },
            {
              title: "cyberpunk",
              genre: "action",
              imagePath:
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              overview:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo."
            },
            {
              title: "cyberpunk",
              genre: "action",
              imagePath:
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              overview:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo."
            },
            {
              title: "cyberpunk",
              genre: "action",
              imagePath:
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              overview:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo."
            },
            {
              title: "cyberpunk",
              genre: "action",
              imagePath:
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              overview:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo."
            },
            {
              title: "cyberpunk",
              genre: "action",
              imagePath:
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              overview:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo."
            },
            {
              title: "cyberpunk",
              genre: "action",
              imagePath:
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              overview:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo."
            },
            {
              title: "cyberpunk",
              genre: "action",
              imagePath:
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              overview:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo."
            },
            {
              title: "cyberpunk",
              genre: "action",
              imagePath:
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              overview:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo."
            }
          ]}
        />
      </ColumnContainer>
    </RowContainer>
  </Wrapper>
);

export default GameContainer;

import styled from "styled-components";
import Carousel from "../../components/Carousel/Carousel";
import BackgroundImage from "../../components/Game/BackgroundImage";
import PosterInfo from "../../components/Game/PosterInfo/PosterInfo";
import TitleInfo from "../../components/Game/TitleInfo/TitleInfo";

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
    flex-flow: row;
  }

  .title {
    @media (min-width: 1024px) {
      margin-top: 80px;
    }
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const Game = () => (
  <Wrapper>
    <BackgroundImage />
    <RowContainer style={{ marginTop: 180 }}>
      <ColumnContainer>
        <PosterInfo />
      </ColumnContainer>
      <ColumnContainer className="title">
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
            "Xbox Series",
          ]}
          overview="Cyberpunk 2077 is a role-playing video game developed and published by CD Projekt. Adapted from the Cyberpunk franchise, the game is an open world, non-linear RPG with an FPS style in which players are able to heavily customize their character to suit their play style. Gun play, exploration, player choice and activities such as hacking are to feature heavily throughout the game with missions, quests and objectives being completed in a variety of different ways. The world will have dynamic weather and a day/night cycle to make it truly immersive."
          distributions={[
            {
              title: "steam",
              url: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
            },
            { title: "GOG", url: "https://www.gog.com/game/cyberpunk_2077" },
            {
              title: "epic",
              url:
                "https://www.epicgames.com/store/product/cyberpunk-2077/home",
            },
          ]}
          externalLinks={[
            { title: "website", url: "http://cyberpunk.net/" },
            { title: "website", url: "http://cyberpunk.net/" },
            { title: "website", url: "http://cyberpunk.net/" },
            { title: "website", url: "http://cyberpunk.net/" },
            { title: "website", url: "http://cyberpunk.net/" },
          ]}
        />
      </ColumnContainer>
    </RowContainer>
    <Carousel
      data={[
        {
          title: "cyberpunk",
          genre: "action",
          imagePath:
            "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          overview:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo.",
        },
        {
          title: "cyberpunk",
          genre: "action",
          imagePath:
            "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          overview:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo.",
        },
        {
          title: "cyberpunk",
          genre: "action",
          imagePath:
            "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          overview:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo.",
        },
        {
          title: "cyberpunk",
          genre: "action",
          imagePath:
            "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          overview:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo.",
        },
        {
          title: "cyberpunk",
          genre: "action",
          imagePath:
            "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          overview:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo.",
        },
        {
          title: "cyberpunk",
          genre: "action",
          imagePath:
            "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          overview:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo.",
        },
        {
          title: "cyberpunk",
          genre: "action",
          imagePath:
            "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          overview:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo.",
        },
        {
          title: "cyberpunk",
          genre: "action",
          imagePath:
            "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          overview:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo.",
        },
        {
          title: "cyberpunk",
          genre: "action",
          imagePath:
            "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          overview:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo.",
        },
        {
          title: "cyberpunk",
          genre: "action",
          imagePath:
            "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          overview:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt error debitis voluptatibus ducimus minus veritatis inventore architecto assumenda expedita exercitationem ratione, iste aspernatur culpa, vel sint rerum molestias itaque quo.",
        },
      ]}
    />
  </Wrapper>
);

export default Game;

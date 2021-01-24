import React from "react";
import styled from "styled-components/macro";
import Carousel from "../components/Carousel/Carousel";
import SectionTitle from "../components/Sections/SectionTitle";

const Container = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 20px;
  }

  & > div:last-child {
    margin-bottom: ${({ theme: { headerHeight } }) => `${headerHeight + 20}px`};
  }
`;

const SectionContainer = styled.div``;

const HomeContainer = () => (
  <Container>
    <SectionContainer>
      <SectionTitle>popular games right now</SectionTitle>
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
    </SectionContainer>
    <SectionContainer>
      <SectionTitle>top rated this month</SectionTitle>
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
    </SectionContainer>
    <SectionContainer>
      <SectionTitle>best ever</SectionTitle>
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
    </SectionContainer>
  </Container>
);

export default HomeContainer;

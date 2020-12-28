/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from "prop-types";
import Slider from "react-slick";
import styled from "styled-components";
import CarouselCard from "./CarouselCard";

const NextArrow = ({ className, style, onClick }) => (
  <span
    className={[className, "icon-chevron-right"].join(" ")}
    style={{ ...style }}
    onClick={onClick}
  />
);

const PrevArrow = ({ className, style, onClick }) => (
  <span
    className={[className, "icon-chevron-left"].join(" ")}
    style={{ ...style }}
    onClick={onClick}
  />
);

const Container = styled.div`
  padding: 0px 25px;
  .slick-prev::before,
  .slick-next::before {
    font-family: icomoon;
    color: black;
  }
`;

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = ({ data }) => (
  <Container>
    <Slider {...settings}>
      {data.map((d, i) => (
        <div key={i}>
          <CarouselCard
            imagePath={d.imagePath}
            title={d.title}
            genre={d.genre}
            overview={d.overview}
          />
        </div>
      ))}
    </Slider>
  </Container>
);

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imagePath: PropTypes.string,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string,
      overview: PropTypes.string,
    })
  ).isRequired,
};

export default Carousel;

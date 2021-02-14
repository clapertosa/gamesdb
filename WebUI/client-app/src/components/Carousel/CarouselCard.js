import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const CardContainer = styled(Card)`
  cursor: pointer;
  max-width: 205px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: auto;

  &:hover {
    .card-img-top {
      transform: scale(1.1);
    }
  }
  .card-img-top {
    height: 270px;
    transition: transform 0.3s;
  }
`;

const CarouselCard = ({ id, imagePath, title, genre, overview }) => {
  const history = useHistory();
  return (
    <CardContainer onClick={() => history.push(`/game/${id}`)}>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title className="text-capitalize">{title}</Card.Title>
        {genre && (
          <Card.Subtitle className="mb-2 text-muted text-capitalize">
            {genre}
          </Card.Subtitle>
        )}
        <Card.Text>
          {overview.length > 100 ? `${overview.substring(0, 97)}...` : overview}
        </Card.Text>
      </Card.Body>
    </CardContainer>
  );
};

CarouselCard.propTypes = {
  id: PropTypes.number.isRequired,
  imagePath: PropTypes.string,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string,
  overview: PropTypes.string
};

CarouselCard.defaultProps = {
  imagePath: "",
  genre: "",
  overview: ""
};

export default CarouselCard;

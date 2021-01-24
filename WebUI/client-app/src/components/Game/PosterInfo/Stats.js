import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const Stats = ({ icon, title, stats }) => (
  <Container>
    <span className={icon} style={{ fontSize: 40, marginBottom: 10 }} />
    <span className="text-capitalize" style={{ fontSize: 12 }}>
      {title}
    </span>
    <span className="text-muted">{stats}</span>
  </Container>
);

Stats.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stats: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Stats;

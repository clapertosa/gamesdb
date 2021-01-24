import PropTypes from "prop-types";
import { CircularProgressbar as CP } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ percentage }) => (
  <CP
    background
    value={percentage}
    styles={{
      root: { width: 128, height: 128, margin: "auto" },
      background: { fill: "white" },
    }}
    text={`${percentage}%`}
  />
);

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircularProgressBar;

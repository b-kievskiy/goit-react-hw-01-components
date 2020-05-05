import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const StatisticsItem = ({ data: { label, percentage } }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label} </span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

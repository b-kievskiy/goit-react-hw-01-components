import React from "react";
import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem";
import styles from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.stat_list}>
          {stats.map((data) => (
            <StatisticsItem data={data} key={data.id} />
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={styles.friend_list}>
        {friends.map((friend) => (
          <li className={styles.item} key={friend.id}>
            {friend.isOnline ? (
              <span className={styles.online}></span>
            ) : (
              <span className={styles.offline}></span>
            )}
            <span className={styles.status}>{friend.isOnline}</span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt=""
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

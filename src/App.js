import React from "react";
import user from "./Components/profile/user";
import { Profile } from "./Components/profile/Profile";
import { Statistics } from "./Components/statistics/Statistics";
import statisticalData from "./Components/statistics/statistical-data";
import { FriendList } from "./Components/friendList/FriendList";
import friends from "./Components/friendList/friends";
import transactions from "./Components/transactions/transactions";
import { TransactionHistory } from "./Components/transactions/TransactionHistory";

export const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={statisticalData} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
  </>
);

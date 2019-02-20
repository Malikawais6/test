import React from "react";
import UserList from "../Containers/user-list";
import UserDetails from "../Containers/user-details";

const App = () => {
  return (
    <div>
      <h2>Username List</h2>
      <UserList />
      <br />
      <h2>User Details</h2>
      <UserDetails />
    </div>
  );
};
export default App;

import React from "react";

function User() {
  return (
    <div>
      <label For="user">Please Select a User</label>
      <select id="userSelection">
        <option value="steven" data-user="steven">
          STEVEN
        </option>
      </select>
    </div>
  );
}

export default User;

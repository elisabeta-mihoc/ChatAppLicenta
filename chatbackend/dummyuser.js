//where we create an empty array of users and add a user who joins a room. In case the user disconnects, the array is emptied.

const c_users = [];

// joins the user to the specific chatroom
function join_User(id, username, room) {
  // adds the user to the array of users already declared in the code above. It consists of three keys id, a username, and a room name, where the room name tells the user the room or group belongs.
  const p_user = { id, username, room };

  c_users.push(p_user);
  console.log(c_users, "users");

  return p_user;
}
console.log("user out", c_users);

// Gets a particular user id to return the current user
function get_Current_User(id) {
  //will take the id of the particular user and return its user object.
  return c_users.find((p_user) => p_user.id === id);
}

// called when the user leaves the chat and its user object deleted from array
function user_Disconnect(id) {
  //if a user disconnects or leaves the chat, the function accepts a user id and deletes the user object from the array users.
  const index = c_users.findIndex((p_user) => p_user.id === id);

  if (index !== -1) {
    return c_users.splice(index, 1)[0];
  }
}

module.exports = {
  join_User,
  get_Current_User,
  user_Disconnect,
};

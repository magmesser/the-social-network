// Users & Friends routes

const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
// Get all Users & Create a new User
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
// Get a single User, Update a User & Delete a User
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
// Add a Friend to a User & Remove a Friend from a User
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;

/* example data
 {   
  "username": "lernantino",
  "email": "lernantino@gmail.com"
 } */

const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend, 
  removeFriend  
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;


// GET users by _id and pupulated thought and friend data

// // example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }


// BONUS: Remove a user's associated thoughts when deleted.


// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list
// Thoughts & Reactions routes

const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
// Get all Thoughts & Create a new Thought
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// Get a single Thought, Update a Thought & Delete a Thought
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// Add a Reaction to a Thought
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// Remove a Reaction from a Thought
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;

/* example data - thought
 {
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
 } */

/* example data - reaction
 { 
  "reactionBody": "Wow! That's amazing! How does it work?", 
  "username": "lernantino", 
  "userId": "5edff358a0fcb779aa7b118b" 
 } */

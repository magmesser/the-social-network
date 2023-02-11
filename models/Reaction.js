// Reaction Schema (SCHEMA ONLY)

const { Schema, model, Types } = require("mongoose");
const dayjs = require("dayjs");

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },   
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (date) => {
        return dayjs(date).format("MM/DD/YYYY");
      },
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Schema Settings
// * This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

module.exports = reactionSchema;

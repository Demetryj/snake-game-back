const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    points: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  userName: Joi.string().required(),
  points: Joi.string().required(),
});

const updatePointsSchems = Joi.object({
  points: Joi.string().required(),
});

const User = model("user", userSchema);

const schemas = {
  addSchema,
  updatePointsSchems,
};

module.exports = {
  User,
  schemas,
};

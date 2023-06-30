const { User } = require("../models/user");

const { HttpError, ctrlWrapper } = require("../helpers");

const getUsers = async (req, res) => {
  const result = await User.find({}, "-createdAt -updatedAt");

  res.json(result);
};

const addUser = async (req, res) => {
  const result = await User.create(req.body);
  res.status(201).json(result);
};

const updatePoints = async (req, res) => {
  const { id } = req.params;
  const result = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getUsers: ctrlWrapper(getUsers),
  addUser: ctrlWrapper(addUser),
  updatePoints: ctrlWrapper(updatePoints),
};

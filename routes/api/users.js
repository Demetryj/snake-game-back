const express = require("express");

const ctrl = require("../../controllers/users");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.get("/", ctrl.getUsers);
router.post("/", validateBody(schemas.addSchema), ctrl.addUser);
router.patch(
  "/:id/points",
  isValidId,
  validateBody(schemas.updatePointsSchems),
  ctrl.updatePoints
);

module.exports = router;

const models = require("../../models");
const bcrypt = require("bcryptjs");

module.exports = async (req, res, next) => {
  const payload = req.body;

  try {
    const hash = bcrypt.hashSync(payload.password, 10);
    const user = await models.User.create(
      Object.assign(payload, { password: hash }),
      { validate: true }
    );

    res.status(201).json({ data: user });
  } catch (err) {
    if (err && err.name === "ValidationError") {
      return res.status(422).json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

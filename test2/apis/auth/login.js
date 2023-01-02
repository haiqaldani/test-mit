const models = require("../../models");
const config = require("../../config/auth.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  models.User.findOne({ where: { username: username } })
    .then((user) => {
      if (user) {
        const checkPassword = bcrypt.compareSync(password, user.password);
        if (checkPassword) {
          const token = jwt.sign(
            {
              user: {
                id: user.id,
                username: user.username,
                nama: user.name,
              },
            },
            config.secret
          );

          res.status(200).json({
            data: { token },
          });
        } else {
          res.status(403).json({
            message: "password yang anda masukan salah.",
          });
        }
      } else {
        res.status(403).json({
          message: "username yang anda masukan belum terdaftar.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || `Internal server error`,
      });

      next();
    });
};

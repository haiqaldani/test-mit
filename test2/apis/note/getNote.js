const models = require("../../models");
const config = require("../../config/auth.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  if (username !== undefined && password !== undefined) {
    models.User.findOne({ where: { username: username } })
      .then(async (user) => {
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

            const note = await models.Note.findByPk(id, {
              where: {
                id: id,
              },
            });

            if (!note) {
              return res.status(404).json({
                metadata: {
                  path: req.originalUrl,
                  http_status_code: 404,
                  http_status: "Not Found",
                  errors: {
                    message: "Note Not Found",
                  },
                },
              });
            }

            return res.json({
              metadata: {
                path: req.originalUrl,
                http_status_code: 200,
                http_status: "Success",
              },
              data: note,
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
  } else {
    const note = await models.Note.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt", "address", "phoneNumber"],
      },
    });

    if (!note) {
      return res.status(404).json({
        metadata: {
          path: req.originalUrl,
          http_status_code: 404,
          http_status: "Not Found",
          errors: {
            message: "Note Not Found",
          },
        },
      });
    }

    return res.json({
      metadata: {
        path: req.originalUrl,
        http_status_code: 200,
        http_status: "Success",
      },
      data: note,
    });
  }
};

const models = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
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
};

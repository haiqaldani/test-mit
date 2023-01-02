const models = require("../../models");

module.exports = async (req, res) => {
  const payload = req.body;
  try {
    let note = await models.Note.create(payload, { validate: true });

    return res.status(200).json({
      metadata: {
        path: req.originalUrl,
        http_status_code: 200,
        http_status: "Success",
        timestamp: new Date().getTime(),
      },
      data: note,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

const db = require("../../models");

exports.index = async (req, res) => {
  try {
    let classifieds = await db.Classified.findAll({
      order: [["updatedAt", "DESC"]],
      logging: false,
      raw: true,
    });

    let count = classifieds.length;

    res.render("home", {
      style: "css/style.css",
      title: "Home",
      classifieds: classifieds,
      count: count,
      helpers: require("../helpers/handlebarsHelpers"),
    });
  } catch (error) {
    res.render("error", {
      error: error,
    });
  }
};

exports.create = async (req, res) => {
  try {
    await db.Classified.create(
      {
        title: req.body.title,
        content: req.body.content,
      },
      { logging: false }
    );

    res.redirect("/");
  } catch (error) {
    res.render("error", {
      error: error,
    });
  }
};

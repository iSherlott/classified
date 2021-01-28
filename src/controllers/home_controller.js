const db = require("../../models");

exports.index = async (req, res) => {
  try {
    let classifieds = await db.Classified.findAll({
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
        id: 7,
        title: "Eder2",
        content: "text test222",
        user_id: 668,
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

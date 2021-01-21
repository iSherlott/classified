const db = require("../../models");

exports.index = async (req, res) => {
  try {
    let classifieds = await db.Classified.findAll({ raw: true });
    console.log(classifieds);
    res.render("home", {
      style: "css/styleHome.css",
      title: "Home",
      classifieds: classifieds,
    });
  } catch (error) {
    res.render("error", {
      error: error,
    });
  }
};

exports.create = async (req, res) => {
  try {
  } catch (error) {
    res.render("error", {
      error: error,
    });
  }
};

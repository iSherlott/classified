"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Classifieds",
      [
        {
          title: "Snoop",
          content: "Dog",
          user_id: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          title: "Scooby",
          content: "Doo",
          user_id: 2,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          title: "Herbie",
          content: "Husker",
          user_id: 3,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};

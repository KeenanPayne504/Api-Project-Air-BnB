"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SpotImages",
      [
        {
          spotId: 1,
          url: "thispic.com",
          preview: true,
        },
        {
          spotId: 2,
          url: "thiiispic.com",
          preview: true,
        },
        {
          spotId: 3,
          url: "thatpic.com",
          preview: true,
        },
        {
          spotId: 4,
          url: "thaaaatpic.com",
          preview: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("SpotImages", null, {});
  },
};

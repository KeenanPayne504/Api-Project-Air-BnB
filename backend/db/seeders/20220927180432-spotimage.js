"use strict";
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "SpotImages"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      options,
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
    return queryInterface.bulkDelete(options, null, {});
  },
};

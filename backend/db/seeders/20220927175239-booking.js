"use strict";

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Bookings"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          userId: 1,
          startDate: new Date("2022-08-30"),
          endDate: new Date("2022-09-01"),
        },
        {
          spotId: 2,
          userId: 2,
          startDate: new Date("2022-09-15"),
          endDate: new Date("2022-09-25"),
        },
        {
          spotId: 3,
          userId: 3,
          startDate: new Date("2022-11-20"),
          endDate: new Date("2022-12-21"),
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

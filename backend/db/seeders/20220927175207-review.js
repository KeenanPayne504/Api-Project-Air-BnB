"use strict";

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Reviews"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      options,
      [
        {
          review: "This Spot is Amazing, We had a Great Time",
          stars: 5,
          userId: 1,
          spotId: 2,
        },
        {
          review: "Didn;t like this place, there were lots of bugs",
          stars: 2,
          userId: 2,
          spotId: 1,
        },
        {
          review: "Had a great time, just wish they provided more food",
          stars: 4,
          userId: 3,
          spotId: 3,
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

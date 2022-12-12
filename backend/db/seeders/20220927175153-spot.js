"use strict";

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Spots"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      options,
      [
        {
          ownerId: 1,
          address: "15465 Ringo Street",
          city: "New Orleans",
          state: "Louisiana",
          country: "USA",
          lat: 37.7645358,
          lng: -122.4730327,
          name: "City Park",
          description: "Public Park",
          price: 300,
        },
        {
          ownerId: 2,
          address: "1829 Mandarin Drive",
          city: "Greenwood",
          state: "Mississippi",
          country: "USA",
          lat: 18.29384393,
          lng: -98.3920424,
          name: "Manse House",
          description: "Beautiful Mansion",
          price: 240,
        },
        {
          ownerId: 3,
          address: "463 Longway Drive",
          city: "Dallas",
          state: "Texas",
          country: "USA",
          lat: 78.238243,
          lng: 100.304983,
          name: "Big House",
          description: "Relaxing Home",
          price: 1000,
        },
        {
          ownerId: 1,
          address: "269 Pekoe Street",
          city: "Baton Rouge",
          state: "Louisiana",
          country: "USA",
          lat: 79.238243,
          lng: 101.304983,
          name: "Backyard Basketball",
          description: "Basketball Court in backyard",
          price: 1000,
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

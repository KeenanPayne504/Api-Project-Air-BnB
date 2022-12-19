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
          url: "https://www.shutterstock.com/image-vector/illustration-simple-house-isolated-on-260nw-1937900650.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1VndqNpPG5Fw0JJ0C1EQ7WgEYcCIJy909INFTobTsYStpPqmwKnE31xsc24joPYnsVQ&usqp=CAU",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://www.shutterstock.com/image-vector/new-family-cottage-3d-house-260nw-1912514437.jpg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://img.freepik.com/premium-vector/suburban-twostorey-house-exterior-with-balcony_8071-12316.jpg?w=2000",
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

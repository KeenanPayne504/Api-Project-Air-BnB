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
        {
          spotId: 5,
          url: "https://media.istockphoto.com/id/157193895/photo/beautiful-swimming-pool-at-an-estate-home.jpg?s=612x612&w=0&k=20&c=CdpPhGnQOxxLJnt4Q-KevD05kM3G-giGD5iLLatEQDM=",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHw%3D&w=1000&q=80",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://media.istockphoto.com/id/1081470818/photo/summer-in-the-park-trees-alley.jpg?s=612x612&w=0&k=20&c=aI5zza635w3rakEOk4a2E5e66riGKM0NohNMu3LKrkg=",
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

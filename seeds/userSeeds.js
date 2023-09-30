const { User } = require("../models");

const userData = [
  {
    username: "Rosie",
    email: "rosie@example.com",
    password: "password123",
  },
  {
    username: "JJ",
    email: "jj@example.com",
    password: "password456",
  },
  {
    username: "Bridger",
    email: "bridger@example.com",
    password: "password789",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
  });

module.exports = seedUsers;

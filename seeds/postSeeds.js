const { Post } = require("../models");

const postData = [
  {
    title: "I'm confused",
    content: "Where did my pizza go?",
    user_id: 1,
    created_at: new Date(),
  },
  {
    title: "Is that Freddy Fazbear!?!?",
    content: "har har har har",
    user_id: 2,
    created_at: new Date(),
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

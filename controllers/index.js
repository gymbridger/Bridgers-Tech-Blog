const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const userRoutes = require("./userRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/", homeRoutes);
router.use("/users", userRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/comments", commentRoutes);

module.exports = router;

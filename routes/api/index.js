const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./users");

// Product routes
router.use("/products", productRoutes);

router.use("/user", userRoutes);

module.exports = router;

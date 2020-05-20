const router = require("express").Router();
const plantRoutes = require("./plants");

// plant routes
router.use("/plants", plantRoutes);

module.exports = router;
const express = require("express");

const {
  getAllUsers,
  getCompanyUsers,
  getUser,
} = require("../controllers/admin");

const router = express.Router();

router.get("/allUsers", getAllUsers);
router.get("/platform/:company", getCompanyUsers);
router.get("/find/user/:id", getUser);

module.exports = router;

const Users = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getCompanyUsers = async (req, res) => {
  try {
    const platform = req.params.company;

    const companyUsers = await Users.find({ platform });

    res.status(200).json(companyUsers);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await Users.find({ dhid: id });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, getCompanyUsers, getUser };

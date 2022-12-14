const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    contact: { type: String },
    dhid: { type: String },
    platform: { type: String, default: "ARdilla" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);

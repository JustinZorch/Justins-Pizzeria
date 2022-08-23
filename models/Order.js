// models/Order.js

import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  /*
      Creating the basic new Order data structure. This
      can be altered to add or reduce information that will
      be passed around and saved to the DB.

      Mongoose has been used here which creates schemas and works
      well with MongoDb the database that has been selected for this project.

      These can also be used to save to different file structures.
  */

  {
    pizzeria: {
      type: String,
      required: true,
    },
    base: {
      type: String,
      required: true,
    },
    topping: {
      type: String,
      required: true,
    },
    pizza: {
      type: String,
      required: true,
    },
    orderstatus: {
      type: [String],
      required: true,
    },
    statuscount: {
      type: Number,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);

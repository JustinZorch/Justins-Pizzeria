import Order from "../../../models/Order";
import dbConnect from "../../../utils/mongodb";

const handler = async (req, res, ctx) => {
  /*
    api/orders

    2 methods available "GET" and "POST".
    Only accessible with ADMIN privileges.

    "GET" retrieves all orders from MONGO.
    "PUT" places a new order in MONGO.

    Both methods use the Order model to find
    and place orders.
  */

  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(JSON.stringify(orders));
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;

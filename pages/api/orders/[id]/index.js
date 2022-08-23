import Order from "../../../../models/Order";
import dbConnect from "../../../../utils/mongodb";
import nookies from "nookies";

const handler = async (req, res) => {
  /*
    api/orders/unique order id

    Here the "PUT" and "DELETE" methods are available to manipulate unique orders.
    Routes are only available if the admin is logged in.

    The "PUT" finds the unique order in MONGO and updates the new status field.
    The "DELETE" find and deletes the order based on its unique ID.
    
    Connection and data manipulation is done using the Mongoose library found in
    the utils folder.
  */

  const {
    method,
    cookies,
    query: { id },
  } = req;

  //restricted API calls for ADMIN only
  if (cookies.token !== process.env.NEXT_PUBLIC_COOKIES_TOKEN) {
    console.log("API NOT ALLOWED");
    return res.status(401).json("Not authenticated!");
  }

  await dbConnect();

  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(JSON.stringify(order));
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      const res = await Order.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;

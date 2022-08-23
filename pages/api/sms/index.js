const handler = async (req, res) => {
  /* 
      SMS API handler which takes in the users number,
      the state of the order and sends an SMS informing
      the user of each step in the order process.

      Using the TWILIO framework
 */

  console.log("WE ARE IN THE SMS API");
  const { cookies } = req;

  // restricted API calls for ADMIN only
  if (cookies.token !== process.env.NEXT_PUBLIC_COOKIES_TOKEN) {
    console.log("API NOT ALLOWED");
    return res.status(401).json("Not authenticated!");
  }

  const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
  const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  //twilio sending number
  const fromNumber = "+13024061613";
  //customer number will be passed here
  //for now using hardcoded number (my NL number)
  const toNumber = "+31684651416";
  const message = req.body.message;

  client.messages
    .create({
      body: message,
      from: fromNumber,
      to: toNumber,
    })
    .then((message) => console.log(message.sid));
};

export default handler;

## Pizzeria - Next.js and React.js Project

A Next.js and React.js using Mongodb, Mongoose, Nookies and Twilio to create
a Pizza ordering website with user and admin capabilities. 

Users are able to create their own orders handled by useState() and useRef(). Orders are then saved to Mongo.

Restaurant management can access the admin page via a personalized Login and is protected by Cookies. Management can update the status of an order which sends an SMS to a user to inform them of the current order status. Once the order has reached or been picked up by the user, management can delete the order. All management API’s are protected by cookies as well.

Users can also see the state of their order from the status page on the site.

To run on a localhost: 

1.  npm start
2.  npm run dev

## Pizzeria - Next.js and React.js Project

Pizzeria is an application that has been developed to showcase an application development philosophy implemented for a pizza delivery website.  The application has been developed on top of the Next.js framework, with React.js as the front-end framework and MongoDB as the database.  Mongoose, Nookies and Twilio have all been implemented to enhance the user experience of Pizzeria.

Users are able to create their own orders and admins are able to interact with these orders in the admin portal.  The application uses various toolsets from both React and MongoDB to manage each user’s delivery state and save orders in the MongoDB database. 

Restaurant management can access the admin page via a personalized Login, the admin page is only accessible once a user has logged in successfully, within login being managed by a user authentication system. 

Management can update the status of an order which sends an SMS to a user to inform them of the current order status. Once the order has been delivered to, or been picked up by the user, management can delete the order. Access to manager functionality is restricted by the user authentication system.

At all times, users can see the state of their order from the status page on the site.


To run on a localhost: 

1.  npm install
2.  npm start
3.  npm run dev

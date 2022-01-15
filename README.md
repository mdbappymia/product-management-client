# Product Management Inventory

This is a simple application for project management inventory system. This is the frontend part of this site. In this part, the data are recieved to the client site using api.

## The client side overview

- User will able to login in an existing account or can create a new account.
- User accounts can be maintained through Firebase
- Logged in user can only see his products in the inventory
- Based on login information, the dashboard will be updated
- Users can log in or sign up using Google also.

### On Dashboard

- User can see the dashboard panel after a successful log in to his account.
- Dashboard panel contains informations about users uploaded product data.
- User can edit or delete any entry and the dashboard will update accordingly.

### Add Product section

- Logged in user can add products in this section.
- Product input section will contain input fields like
- Product name, Amount, Image, Weight/Measurement, price etc
- Data will store to the mongodb database.

### Update/Delete Products

- Product entry can be edited or deleted by a logged in user
- Updating or deleting any product will immediately affect the product list and also affect the dashboard panel

## Technology used

- Node JS
- Express JS
- MongoDB
- Heroku

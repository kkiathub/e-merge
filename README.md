
# E-merge App

This full-stack app allows you search any kind of product on sale and for your own convenience. A user authentication system has been set up so anytime you come back to our app, you will be able to retrieve information from past searches.

  We have added a shopping cart option for you to use and save a product you may have liked. With our shipping calculating system, you will be able to work around those products you have added to your profile page and get an acccurate estimated cost based on weight and size.

# Try the Demo on Heroku

https://e-merge-2019.herokuapp.com/

# How to use this application

1. Enter the product of your interest and click search.
2. Click add on any products you like.
3. Go to My Product Page on the menu bar.
4. On each item, if there is a green truck icon, it means it contains shipping information.
    - You can click 'Obtain Shipping Information' button to try to obtain shipping information for those items that do not have shipping information available.
    - Select any products you are intested, then click 'Proceed to calculate Shipping/Profit.
5. On this summary page, click on any item will give you a shipping information except those that do not have the green truck icons from previous page.
    - Enter destination zip code, then click 'Calculate Shipping' to get shipping cost and proceed to calcuation profit if desire.


# What this project does :-

Display categories of product (eg Electronic,Sports)

Display products in a given category (TV,Clothing,Work Tools)

Show Product Details.

Add any product to cart and update total item count and amount.

Remove item option for user's convenience.

Store cart list in DB for persistant storage.

# Data and Domain Layer

Fetch and store list of Products from server using Mongoose database. The API server returns product data from real life shopping cart option.

Persistant storage of Shopping List items when User close the App.

# Technologies

-Proxycrawl API/Cheerio: for scrapping purposes

-USPS API: for shipping calculations

-Fast-xml-parser: for xml data conversion into JSON format

-Mongoose DB: Data storing

-Express: Handling client-server request and reponse




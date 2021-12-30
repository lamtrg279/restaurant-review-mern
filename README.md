# MERN Stack Restaurant application
In this project, I built a full stack web application using the MERN stack (MongoDB, Express, React, Node.js) that allows users to search for the restaurant's name, address, cuisine.
Users can also create, update, delete reviews on restaurants.

## Implementation Details
- Required node.js and connection to mongoAtlas sample database https://www.mongodb.com/atlas/database. 
- User also needs to create an index like so { "name" : "text" } in mongoAtlas in order to search by names.
- Edit the .env file with URI provided by mongoAtlas 
-Commands (need 2 tabs of shell): 
 - cd bankend -> node index.js (make the server to listen to port 5000)
 - cd frontend -> npm start (run the react front end side)

#### Routes for backend

- `/api/restaurant` 
  - GET /api/restaurant?zipcode=<zipcode to search>&page=<page> to get a list of restaurant with desired zipcode (page is 0 if page is not provided)
  - GET /api/restaurant?cuisine=<cuisine to search>&page=<page> to get a list of restaurant with desired cuisine 
  - GET /api/restaurant?name=<name to search>&page=<page> to get a list of restaurant with desired name 
  - GET /api/restaurant/cuisines for a list of cuisine
  
- `/api/restaurant/review`
  - POST: User can post review with request body like so and can retrieve this collection in mongoAtlas under "Review" database in the sample database: 
      {
        "restaurant_id": <restaurant id>,
        "text": <review text>,
        "name": <user name>,
        "user_id": <user id>
      }
#### Demo 

https://user-images.githubusercontent.com/76791917/147776288-2de5db67-2d6a-4cf3-96ee-69aef758ed68.mp4


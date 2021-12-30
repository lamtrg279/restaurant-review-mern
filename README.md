# restaurant-review-server
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
![homepage](https://user-images.githubusercontent.com/76791917/147775861-998a7889-0fd4-4b8d-871f-d099dc7c6bff.PNG)
![search by name](https://user-images.githubusercontent.com/76791917/147775881-413878ce-b408-4a33-95c0-4a6a0ab12483.PNG)
![search by zip](https://user-images.githubusercontent.com/76791917/147775886-e4885398-ed62-43c7-aa06-a54556f954cd.PNG)
![login](https://user-images.githubusercontent.com/76791917/147775915-53442fbb-7eb1-4a90-acb8-14b2a8aca300.PNG)
![add review](https://user-images.githubusercontent.com/76791917/147775927-ee8f74e8-23b5-4d47-abd0-1d20b479d5e0.PNG)


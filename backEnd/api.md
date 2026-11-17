# GYM MANAGEMENT API

## What is the project backend?
- This backend is a NodeJS rest API that sends new data to an active database, fetches and serves data from the database.
- The database which this API interacts with is a relational SQL database.

## User documentation :
#### * Base endpoint -> https://localhost:7080/
#### * Data retreival endpoints:
- Fetch all users from database: /api/users
- Fetch spacific user's data using query parameters /api/users?userid=<actualIdGoesHere>
  * The data retreived from this endpoint is an object that has the user name, subscription type and whether or not they are a trianer

### * Data submission endpoints(POST):

- Send the details of a new user : /api/newuser

#### USER GUIDE
- Make sure you have atleast version 26.7.0 of Node and at least version 11.19.0 of npm installed in your machine, although older versions may also work I recommend the newer ones to avoid manual troubleshooting
- Run the command 'npm run start' in the MyGym/backEnd directory to start the server.
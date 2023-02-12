  # The Social Network
  
  ## Badges
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  🔮 Challenge 18 NoSQL Challenge: Social Network API
  
  Your challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js Links to an external site.and Mongoose Links to an external site.packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps. 

  Link to the video demo: [Video Link](https://watch.screencastify.com/v/ZldWEPiYjhGjQC0m7LBV)

  ## 📚 Table of Contents
  * [🔧 Installation](#installation)
  * [🎢 Usage](#usage)
  * [📝 Tests](#tests)
  * [🚧 Contribution](#contribution)
  * [🔑 License](#license)
  * [❓ Questions](#questions)
  
  ## Installation
  🔧 npm i packages: 
  * express.js
  * mongoose
  * day.js (js date library)

  ## Usage 
  🎢 npm i && npm start to begin application. Technologies used: MongoDB, mongoose, express, nodemon, insomnia, day.js, Javascript.

  ## Tests
  📝 Test the following routes in Insomnia:

  ### **Users & Friends**
  * Get all Users: `GET /api/users`
  * Create a new User: `POST /api/users`
    * Example Data: `{ "username": "lernantino", "email": "lernantino@gmail.com }`
  * Get a single User: `GET /api/users/:userId`
  * Update a User: `PUT /api/users/:userId`
    * Example Data: `{ "username": "mmesser", "email": "mmesser@gmail.com }`
  * Delete a User: `DELETE /api/users/:userId`
  * Add a Friend to a User: `PUT /api/users/:userId/friends/:friendId`
  * Remove a Friend from a User: `DELETE /api/users/:userId/friends/:friendId`

  ### **Thoughts & Reactions**
  * Get all Thoughts: `GET /api/thoughts`
  * Create a new Thought: `POST /api/thoughts`
    * Example Data: `{ "thoughtText": "Here's a cool thought...", "username": "lernantino", "userId": "5edff358a0fcb779aa7b118b" }`
  * Get a single Thought: `GET /api/thoughts/:thoughtId`
  * Update a Thought: `PUT /api/thoughts/:thoughtId`
    * Example Data: `{ "thoughtText": "On second thought...", "username": "lernantino", "userId": "5edff358a0fcb779aa7b118b" } `
  * Delete a Thought: `DELETE /api/thoughts/:thoughtId`
  * Add a Reaction to a Thought: `PUT /api/thoughts/:thoughtId/reactions`
    * Example Data: `{ "reactionBody": "Wow! That's amazing! How does it work?", "username": "lernantino", "userId": "5edff358a0fcb779aa7b118b" }`
  * Remove a Reaction from a Thought: `DELETE /api/thoughts/:thoughtId/reactions`

  ## Contribution 
  🚧 [Contributor Covenant](https://www.contributor-covenant.org/) <br> Assistance sought from [StackOverflow](https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax) on User Model's email matching validation.
  

  ## License
  🔑 This application is covered under the MIT license.  <br> 
      Find out more here: https://choosealicense.com/licenses/mit/ <br>
      [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Questions
  ❓ Have questions? Please contact Maggie Messer at: <br>
  * magmesser's GitHub: https://github.com/magmesser <br> 
  * Maggie Messer's Email: magmesser@gmail.com <br>
  
  ❗ Repository Link: https://github.com/magmesser/the-social-network

// BUILD YOUR SERVER HERE
const express = require('express');
const User = require('./users/model');

const server = express()

server.get('/api/users', (req, res) => {
    User.find()
        .then(users => {
            throw new Error('its quiet... to quiet')
        })
        .catch(err => {
            res.status(500).json({
                message: 'getting users',
                err: err.message
            })
        })
})

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not really found'
    })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}



// | Method | URL            | Description                                                                                            |
// | ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
// | POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                   |
// | GET    | /api/users     | Returns an array users.                                                                                |
// | GET    | /api/users/:id | Returns the user object with the specified `id`.                                                       |
// | DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                 |
// | PUT    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user |

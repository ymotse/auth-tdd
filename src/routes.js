const routes = require('express').Router()
const { User } = require('./app/models')

User.create({
    name: 'Yitshhaq',
    email: 'ymotse@gmail.com',
    password_hash: '432554654768665754'
})

module.exports = routes

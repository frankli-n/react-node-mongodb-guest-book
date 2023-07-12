const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Blog = require('../models/blogs')
const logger = require('../utils/logger.js')

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({}).populate('blogs')
    
  response.json(users)
})

usersRouter.post('/', async (request, response) => {
  console.log('posting');
  const { username, name, password } = request.body

  if (password.length < 4) {
    logger.error('Password must be longer than 3');
    return response.status(401).json({ error: 'Password must be longer than 3' });
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = usersRouter
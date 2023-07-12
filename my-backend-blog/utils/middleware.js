const logger = require('./logger')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    console.log('here in middleware');
    request.token = authorization.replace('Bearer ', '')
  }
  next() 
}

const userExtractor = async (request, response, next) => {
  if (request.token) {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    request.user = await User.findById(decodedToken.id)
    console.log('middleware request.user',request.user.username);
  }

  next()
}

module.exports = {
  tokenExtractor,
  userExtractor
}
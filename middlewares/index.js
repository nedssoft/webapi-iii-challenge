const User = require('../users/userDb')

function logger(req, res, next) {
  console.log(`[METHOD: ${req.method}] [URL: ${req.url}] [TIMESTAMP: ${new Date().toISOString()}]`);
  next()
};

async function validateUserId(req, res, next) {
  const { id } = req.params;
  if(!id || !Number(id)) {
    next({statusCode: 400, message:"invalid user id" })
  } else {
    const user = User.getById(id);
    if (user) {
      req.user = user;
      // console.log(user)
      next()
    } else {
      next({statusCode: 400, message:"invalid user id" })
    }
  }
}

function errorHandler(error, req, res, next) {
  if (error) {
    const { statusCode, message, ...rest} = error
    if (statusCode === 500) {
      return res.status(statusCode).json({
        message : 'Internal server error',
        ...( rest && { rest })
      })
    } else {
      return res.status(statusCode).json({
        message,
        ...( rest && rest)
      })
    }
  }
  next()
}

module.exports = {
  logger,
  errorHandler,
  validateUserId
}
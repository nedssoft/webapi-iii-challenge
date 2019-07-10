const express = require('express');

const router = express.Router();
const User = require('./userDb')

router.post('/', validateUser, (req, res) => {

});

router.post('/:id/posts', validatePost, (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', validateUserId, (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

async function validateUserId(req, res, next) {
  const { id } = req.params;
  if(!id || !Number(id)) {
    next({statusCode: 400, message:"invalid user id" })
  } else {
    const user = await User.getById(id);
    if (user) {
      req.user = user;
      next()
    } else {
      next({statusCode: 400, message:"invalid user id"})
    }
  }
}

function validateUser(req, res, next) {
  try {
    const { body } = req;
    if (!body) {
      next({statusCode: 400, message: 'missing user data'});
    } else if (!body.name) {
      next({statusCode: 400, message: 'missing required name field'});
    } else {
      next()
    }
  } catch (error) {
    next({statusCode: 500, message: 'Internal server error'});
  }
};

function validatePost(req, res, next) {
  try {
    const { body } = req;
    if (!body) {
      next({statusCode: 400, message: 'missing post data'});
    } else if (!body.text) {
      next({statusCode: 400, message: 'missing required text field'});
    } else {
      next()
    }
  } catch (error) {
    next({statusCode: 500, message: 'Internal server error'});
  }
};

module.exports = router;

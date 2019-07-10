const express = require('express');

const router = express.Router();
const User = require('./userDb')
router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

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

};

function validatePost(req, res, next) {

};

module.exports = router;

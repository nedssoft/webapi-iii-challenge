const express = require('express');

const Post = require('./postDb')
const router = express.Router();

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {
  const { id } = req.params;
  if(!id || !Number(id)) {
    next({statusCode: 400, message:"invalid post id" })
  } else {
    const post = await Post.getById(id);
    if (post) {
      req.post = post;
      next()
    } else {
      next({statusCode: 400, message:"invalid post id"})
    }
  }
};

module.exports = router;
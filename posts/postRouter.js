const express = require('express');

const Post = require('./postDb')
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.get()
    if (posts.length) {
      return res.status(200).json({ message: 'Ok', posts})
    } else {
      next({statusCode: 500})
    }
  } catch (error) {
    next({statusCode: 500})
  }
});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

async function validatePostId(req, res, next) {
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

module.exports = {
  router
}
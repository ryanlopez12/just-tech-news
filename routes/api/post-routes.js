const router = require('express').Router();
const { Post, User } = require('../../models');

//get all users
router.get('/', (req,res) => {
    console.log('=======================');
    Post.findAll({
        // Query configuration
    })
});

Post.findAll({
    attributes: ['id', 'post_url', 'title', 'created_at'],
})
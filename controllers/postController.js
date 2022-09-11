const { Post } = require('../models')

exports.createPost = async (req, res) => {
  const data = await Post.create({
    content: req.body.content
  })
 
  res.send(data)
 };
 
 exports.getPosts = async (req,res) => {
  const data = await Post.findAll()
  res.send(data)
 }
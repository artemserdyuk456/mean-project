const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://artem:bARTfv5MfbjbtAsJ@cluster0-xdwij.mongodb.net/node-angular?retryWrites=true")
  .then(() => {
    console.log('Connect to database!')
  })
  .catch(() => {
    console.log('Connection failed!')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// VDoO8wa5nyNejkom
app.post("/api/posts",(req, res, next) => {
  const post = new Post({
    gender: req.body.gender,
    lookingFor: req.body.lookingFor,
    between: req.body.between,
    location: req.body.location
  });
  post.save().then(createdPost => [
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id
    })
  ]);
});

app.get("/api/posts",(req, res, next) => {
  Post.find().then(documents => {
      res.status(200).json({
        message: 'Posts fetched successfully!',
        postData: documents
      });
    });

});

app.delete("/api/posts/:id",(req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
  });
  res.status(200).json({
    message: 'Posts deleted!'
  });
});

module.exports = app;

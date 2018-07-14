const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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

app.post("/api/posts",(req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  })

});

app.get("/api/posts",(req, res, next) => {
  const postData = [
    {
      id: "gk454545",
      gender: "First Server",
      lookingFor: "server",
      between: "server",
      location: "server"
    },
    {
      id: "4fsg5s5sg",
      gender: "Second Server",
      lookingFor: "server",
      between: "server",
      location: "server"
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    postData: postData
  });
});

module.exports = app;

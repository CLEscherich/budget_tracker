const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://CLEscherich:pass`1234@cluster0.bxr7x.mongodb.net/<dbname>?retryWrites=true&w=majority'
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', () => {
  console.log('mongoose connected');
}); 

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
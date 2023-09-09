const mongoURL =
  "mongodb://user:user@ac-gupaa8b-shard-00-00.ignfn34.mongodb.net:27017,ac-gupaa8b-shard-00-01.ignfn34.mongodb.net:27017,ac-gupaa8b-shard-00-02.ignfn34.mongodb.net:27017/fees?ssl=true&replicaSet=atlas-hbzsvh-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectDB;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
// const { MONGOURI } = require("./config/keys");

if (process.env.NODE_ENV != "production") {
  const morgan = require("morgan");
  app.use(morgan("common"));
}

// Connecting to Mongo DB Cloud
mongoose.connect(MONGOURI);
mongoose.connection.on("connected", () => {
  console.log("connected to mongo !!!");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting....", err);
});
////////////////////



// Regestering the routers
app.use(express.json()); // parses the post requests and send to routes
app.use(require("./routes/auth")); // route handelers externally
app.use(require("./routes/ide"));


// if (process.env.NODE_ENV === "production") {
//   const path = require("path")
//   app.use(express.static(path.join(__dirname, "/client/build")));

//   app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });
// }

app.listen(PORT, () => {
  console.log("Server is running at localhost:", PORT);
});

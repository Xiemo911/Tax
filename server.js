import express from "express";
import path from "path";
const port = process.env.PORT || 5000;
const app = express();

// app.use(express.static(path.join(__dirname, 'client/build')));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join(("client/build/index.html")));
  });
}

// app.get("/", (req, res) => {
//   res.send("Successful response.");
// });
app.listen(port, () => console.log("Example app is listening on port 5000."));

const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(express.json());
// server.use(express.urlencoded());
server.use(express.static("public"));

server.use(morgan('default'))

// server.use((req, res, next) => {
//   console.log(req.get("User-Agent"), req.hostname, req.method, req.ip);
//   next();
// });

const auth = (req, res, next) => {
  // console.log(req.query);
  if (req.body.password === "321") {
    next();
  } else {
    res.sendStatus(401);
  }
};

//server.use(auth);

// API - Endpoint - Route

server.get("/product/:id", auth, (req, res) => {
  console.log(req.params)
  res.json({ type: "GET" });
});
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/demo", (req, res) => {
  // res.sendStatus(404);
  // res.json(products)
  // res.status(201).send('<h1>hello</h1>')
  // res.sendFile('/Users/abhishekrathore/Desktop/node-app/index.html')
});

server.listen(8080, () => {
  console.log("server started");
});

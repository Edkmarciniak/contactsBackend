import express from "express";

const app = express();

app.get("/", (req, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});

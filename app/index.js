import express from "express";

const app = express();

app.get("/", (req, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, response) => {
  response.send("<h1>About page!</h1>");
});

app.use(express.json());

app.post("/api/contacts", (request, response) => {
  response.send("ok");
});

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});

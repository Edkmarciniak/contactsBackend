// Express is a web framework for Node.js
// We primarily use it to route users to different pages/responses
import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.get("/about", (_, res) => {
  res.send("About Me");
});

// Express uses a middleware function to parse the body of the request
// Middleware is any code that is between the request and the response
// It can be used to parse the body of the request, or to log the request
// It can also be used to authenticate the user, or to check if the user is authorized to access a certain resource
// In this case, we are using it to parse the body of the request
app.post("/api/contacts", (req, response) => {
  console.log(req.body);
  response.send("ok");
});

app.use(express.json());
// This is a middleware function
// It will be called for every request

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});

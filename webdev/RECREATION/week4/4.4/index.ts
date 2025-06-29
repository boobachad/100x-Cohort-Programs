const express = require("express");
const app = express();
app.use(express.json());

function isOldEnough(age: any) {
  if (age >= 18) return true;
  else false;
}

app.get("/ride1", function (req: any, res: any) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "u have successfuly ridden ride1",
    });
  } else {
    res.status(411).json({
      msg: "u are not of age",
    });
  }
});

function isOldEnoughMiddleware(req: any, res: any, next: any) {
  const age = req.query.age;
  if (age >= 18) next();
  else {
    res.status(411).json({
      msg: "ua re not of age from middleware",
    });
  }
}

app.get("/ride2", isOldEnoughMiddleware, function (req: any, res: any) {
  res.json({
    msg: "u have successfuly ridden ride2",
  });
});

app.listen(3011, () => {
  console.log("server is running on port 3011");
});

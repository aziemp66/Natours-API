const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ Hello: "Hello World" });
});

app.post("/", (req, res) => {
    res.status(200).json({ data: "Data Received Successfully" });
});

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));

const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001

app.use(cors());

app.get("/", async (req, res) => {
  const body = await response.text();

  console.log(body);
  res.json("website-b");
});

app.get("/trigger-webhook-event", async (req, res) => {
  try {
    const data = {
      secret: "secret123",
    };

    const response = await fetch("http://localhost:3000/test", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    
    const responseData = await response.json();
    console.log(responseData);

    res.json("Webhook event triggered");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
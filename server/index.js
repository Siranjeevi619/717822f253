const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.use("/test/users", async (req, res) => {
  try {
    const token = req.headers.authorization;

    const response = await axios.get("http://20.244.56.144/test/users", {
      headers: {
        Authorization: token,
      },
    });
    console.log("success");
    return res.status(200).json({ user: response.data.users });
  } catch (er) {
    console.log(er);
    return res.status(500).json({ message: er.message });
  }
});

app.get("/test/:event", async (req, res) => {
  const { event } = req.params;
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "token miissed" });
  }

  try {
    const response = await axios.get(`http://20.244.56.144/test/${event}`, {
      headers: {
        Authorization: token,
      },
    });
    console.log("Data received:", response.data);
    return res.json({ numbers: response.data.numbers });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 9000");
});

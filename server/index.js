const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/run", async (req, res) => {
  try {
    const { code, language_id, input } = req.body;

    if (!code) {
      return res.status(400).json({ error: "No code provided" });
    }

    const response = await fetch(
      "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          language_id: language_id,
          source_code: code,
          stdin: input
        })
      }
    );

    const data = await response.json();

    res.json({
      output:
        data.stdout ||
        data.stderr ||
        data.compile_output ||
        "No output",
      isError: data.status.id !== 3
    });

  } catch (error) {
    res.status(500).json({ error: "Execution failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

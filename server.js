const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/ask', async (req, res) => {
  try {
    const userMessage = req.body.question;

    // ✅ LOG #1: Received input
    console.log("🔍 Received question from frontend:", userMessage);

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });

    const answer = completion.data.choices[0].message.content;

    // ✅ LOG #2: AI responded
    console.log("✅ AI replied:", answer);

    res.json({ answer });
  } catch (error) {
    // ✅ LOG #3: Catch any OpenAI error
    console.error("🔥 AI error:", error.response?.data || error.message);
    res.status(500).json({ answer: 'Sorry, something went wrong with the AI.' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server listening at http://localhost:${port}`);
});


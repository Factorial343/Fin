const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/ask', async (req, res) => {
  try {
    const { question } = req.body;

    const result = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
      max_tokens: 150,
      temperature: 0.7,
    });

    const response = result.data.choices[0].message.content;
    res.json({ response });
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Something went wrong with the AI.' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server listening at http://localhost:${port}`);
});

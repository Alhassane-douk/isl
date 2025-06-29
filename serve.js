const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/reformuler", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Tu es un assistant scientifique qui reformule les textes comme un grand savant.",
        },
        {
          role: "user",
          content: `Reformule ce texte de manière savante : ${text}`,
        },
      ],
      temperature: 0.7,
    });

    res.json({ result: response.data.choices[0].message.content });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).send("Erreur IA");
  }
});

app.listen(3000, () => {
  console.log("✅ Serveur Word IA lancé !");
});
});

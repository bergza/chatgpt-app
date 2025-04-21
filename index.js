// index.js
require('dotenv').config();

// En lugar de destructurar Configuration y OpenAIApi:
const OpenAI = require('openai');

// Crea la instancia pasando tu API key:
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function run() {
  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system',    content: 'Eres un asistente muy conciso.' },
        { role: 'user',      content: 'Hola, ¿puedes decirme “¡Hola, mundo!”?' }
      ]
    });
    console.log(res.choices[0].message.content);
  } catch (err) {
    console.error('Error llamando a la API:', err.message);
  }
}

run();
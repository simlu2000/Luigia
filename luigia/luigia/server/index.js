const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/chat', async (req, res) => {
    const { prompt } = req.body;
    console.log("Domanda ricevuta per Luigia:", prompt);

    //const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${API_KEY}`;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Sei Luigia, un'assistente italiana simpatica e professionale. Rispondi in modo breve e naturale: ${prompt}`
                    }]
                }]
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error("Errore API Google:", data.error);
            return res.status(data.error.code || 500).json({ error: data.error.message });
        }

        // Estrazione del testo dalla struttura JSON di Google
        const aiResponse = data.candidates[0].content.parts[0].text;

        console.log("Luigia ha risposto con successo: ", aiResponse);
        res.json({ text: aiResponse });

    } catch (error) {
        console.error("Errore durante la fetch:", error);
        res.status(500).json({ error: "Errore di connessione al server AI." });
    }
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`--- LUIGIA SERVER ONLINE (REST MODE) PORTA ${PORT} ---`);
});
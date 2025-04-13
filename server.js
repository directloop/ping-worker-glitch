import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

const targetUrl = "https://your-worker.workers.dev"; // ЗАМЕНИ на адрес Cloudflare Worker

setInterval(async () => {
  try {
    const res = await fetch(targetUrl);
    const text = await res.text();
    console.log(`[${new Date().toISOString()}] Пинг успешен: ${text}`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Ошибка пинга: ${err.message}`);
  }
}, 1000); // Раз в секунду

app.get("/", (req, res) => {
  res.send("Пингер запущен и работает!");
});

app.listen(port, () => {
  console.log(\`Сервер запущен на http://localhost:\${port}\`);
});

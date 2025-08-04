const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Request Header Parser Microservice');
});

app.get('/api/whoami', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  const language = req.headers['accept-language'] || '';
  const software = req.headers['user-agent'] || '';

  res.json({
    ipaddress: ip.split(',')[0],   // in case of multiple IPs
    language: language,
    software: software
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

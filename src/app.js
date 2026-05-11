const express = require('express');
const os = require('os');

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/info', (req, res) => {
  res.json({
    date: new Date().toISOString(),
    hostname: os.hostname(),
  });
});

module.exports = app;

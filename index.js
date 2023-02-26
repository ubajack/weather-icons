const express = require('express');
const app = express();
const cors = require('cors');
const favicon = require('serve-favicon');
const path = require('path');
const port = 8080;

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const defaultIcons = [
  'spongebob',
  'spongebob-back',
  'error',
  'alert',
  'hot',
  'cold',
];
const iconsLength = defaultIcons.length;

app.use(cors(corsOptions));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/weather', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const protocol = req.protocol;
  const host = req.hostname;
  const url = req.originalUrl;

  const fullUrl = `${protocol}://${host}:${port}${url}`;

  const responseString = `Full URL is: ${fullUrl}`;
  res.redirect('/weather');
});

app.get('/**', (req, res) => {
  const icon = defaultIcons[Math.floor(Math.random() * iconsLength)];
  res.redirect(`/weather/default/${icon}.png`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

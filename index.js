const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const defaultIcons = ['spongebob', 'spongebob-back', 'error', 'alert'];
const iconsLength = defaultIcons.length;

app.use(cors(corsOptions));

const path = require('path');
app.use('/weather', express.static(path.join(__dirname, 'public')));

app.get('/**', (req, res) => {
  const icon = defaultIcons[Math.floor(Math.random() * iconsLength)];
  res.redirect(`/weather/default/${icon}.png`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express');
var useragent = require('express-useragent');

const app = express();
app.use(useragent.express());
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', async (req, res) => {
  res.send(req.useragent);

  // res.redirect(
  //   `https://stackoverflow.com/questions/11355366/how-to-redirect-users-browser-url-to-a-different-page-in-nodejs`
  // );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

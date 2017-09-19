/**
 * @author Philip Van Raalte
 * @date 2017-09-18.
 */
const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
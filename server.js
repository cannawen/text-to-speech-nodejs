#! /usr/bin/env node

require('dotenv').config({ silent: true });

// Deployment tracking
require('cf-deployment-tracker-client').track();

const server = require('./app');

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

server.listen(port, () => {
  console.log('Server running on port: %d', port);
});

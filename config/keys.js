/**
 * keys.js
 * @author Philip Van Raalte
 * @date 2017-09-18.
 */

if(process.env.NODE_ENV == 'production'){
  module.exports = require('./prod');
}
else{
  module.exports = require('./dev');
}
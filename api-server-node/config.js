
var env = process.env.NODE_ENV || 'development';
module.exports = {

	isProd: env == "production"
};
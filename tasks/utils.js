const argv = require('minimist')(process.argv);

exports.getEnvName = () => {
  return argv.env || 'production';
};

exports.beepSound = () => {
  process.stdout.write('\u0007');
};

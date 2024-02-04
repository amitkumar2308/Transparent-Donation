const { hash } = require('@aeternity/argon2-browser/dist/argon2-bundled.min.js');

exports.argon2d = 0;
exports.argon2i = 1;
exports.argon2id = 2;

exports.hash = function (plain, options) {
  return hash({
    pass: plain,
    hashLen: options.hashLength,
    salt: options.salt,
    time: options.timeCost,
    mem: options.memoryCost,
    type: options.type,
    ...options
  }).then(({ hash }) => hash);
}

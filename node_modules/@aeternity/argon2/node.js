const { hash } = require('argon2');

exports.argon2d = 0;
exports.argon2i = 1;
exports.argon2id = 2;

exports.hash = function (plain, options) {
  return hash(Buffer.from(plain), {
    hashLength: options.hashLength,
    salt: Buffer.from(options.salt),
    timeCost: options.timeCost,
    memoryCost: options.memoryCost,
    type: options.type,
    raw: true,
    ...options
  });
}

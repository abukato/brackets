module.exports = function check(str, bracketsConfig) {
  let length = str.length;
  let config = bracketsConfig.map(el => el.join(''));

  for (let i = 0; i < length; i+=2) {
    for (let j = 0; j < config.length; j++) {
      str = str.replace(config[j], '');
    }
    if (str.length === 0) {
      return true;
    }
  }

  return false;
}



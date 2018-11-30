const DEFAULT_NAMES = [
  'ALICE',
  'BOB',
  'CAROL',
  'DAVID',
  'EVE',
  'FRANK',
  'GRACE',
  'HEIDI',
  'IVAN',
  'JUDY',
  'KATHERINE',
  'LIAM',
  'MICHAEL',
  'NIAJ',
  'OLIVIA',
  'PEGGY',
  'QUENTIN',
  'RICHARD',
  'SYBIL',
  'TRENT',
  'ULYSSES',
  'VICTOR',
  'WENDY',
  'XIMENA',
  'YAAKOV',
  'ZARA',
];

let assignNames = function (accounts, options) {
  options = options || {};

  let context = options.context || accounts;

  let names = (options.names || []).concat(DEFAULT_NAMES);

  if (options.toLowerCase) {
    names = names.map(name => name.toLowerCase());
  } else {
    names = names.map(name => name.toUpperCase());
  }

  for (var i = 0; i < Math.min(accounts.length, names.length); i++) {
    context[names[i]] = accounts[i];
  }

  return accounts;
};

module.exports = assignNames;

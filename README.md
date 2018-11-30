# Truffle Personalities

Alias the default Truffle or Ganache accounts with relatable names.

## Behavior

Truffle Personalities will alias `n` accounts, where `n` is the lesser of the number of accounts provided and the number of names available.  The default list of names, in order of assignment, is as follows:

1. `ALICE`
1. `BOB`
1. `CAROL`
1. `DAVID`
1. `EVE`
1. `FRANK`
1. `GRACE`
1. `HEIDI`
1. `IVAN`
1. `JUDY`
1. `KATHERINE`
1. `LIAM`
1. `MICHAEL`
1. `NIAJ`
1. `OLIVIA`
1. `PEGGY`
1. `QUENTIN`
1. `RICHARD`
1. `SYBIL`
1. `TRENT`
1. `ULYSSES`
1. `VICTOR`
1. `WENDY`
1. `XIMENA`
1. `YAAKOV`
1. `ZARA`

## Installation

```shell
npm install --save truffle-personalities
```

## Usage

Pass the `accounts` array provided to Truffle's `contract` function to Truffle Personalities.

```javascript
const trufflePersonalities = require('truffle-personalities');

contract('TestContract', function (accounts) {
  trufflePersonalities(accounts);

  accounts.ALICE === accounts[0];
  // => true

  accounts.BOB === accounts[1];
  // => true
});
```

### Options

An `options` object may be passed as the second argument.

| Option | Description | Default |
|-|-|-|
| `context` | the object to which aliases are assigned | `accounts` |
| `names` | array of names to assign before using the default names | `[]` |
| `toLowerCase` | boolean describing whether to convert names to lower case rather than to upper case | `false` |

#### Examples

Pass a list of custom names to override the defaults.  This example proposes the use of `NOLAN` as "nobody", or an uninvolved third party, and `OWEN` as a contract's owner.

```javascript
trufflePersonalities(accounts, { names: ['NOLAN', 'owen'], toLowerCase: true});

accounts.NOLAN === undefined;
// => true

accounts.nolan === accounts[0];
// => true

accounts.owen === accounts[1];
// => true

accounts.alice === accounts[2];
// => true
```

Pass the `global` object as the `context` option in order to access the aliased addresses as standalone variables.

```javascript
trufflePersonalities(accounts, { context: global });

accounts.ALICE === undefined;
// => true

ALICE === accounts[0];
// => true
```

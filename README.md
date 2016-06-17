
# throw-if-missing

**Enforce required parameters or options in ES6.**

Based on [An Easier Way to Enforce Required Parameters in ES6](https://gist.github.com/MarkTiedemann/17ebf5b38b5b7566478de7f623e1defd).

## Installation

```
npm install throw-if-missing
```

## Quickstart

```js
const x = require('throw-if-missing')

const login = ({ username = x`username`, password = x`password` } = {}) => {}

login({ username: 'C-3PO' }) // ==> Error: Missing password
```

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).

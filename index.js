'use strict'

module.exports = function (missing) {
    throw new Error('Missing ' + missing)
}

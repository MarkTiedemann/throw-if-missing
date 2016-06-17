'use strict'

module.exports = missing => {
    throw new Error(`Missing ${missing}`)
}

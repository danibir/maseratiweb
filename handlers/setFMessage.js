const flash = require('../utils/flash')

const setFMessage = (res, type, message) => {
    const fMessage = {
        message: message,
        type, type
    }
    res.locals.fMessage = fMessage
}

module.exports = setFMessage
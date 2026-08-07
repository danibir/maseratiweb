const setFMessage = require('../handlers/setFMessage')

const setFMessageM = (type, message) => (req, res, next) => {
    setFMessage(res, type, message)
    next()
}

module.exports = setFMessageM
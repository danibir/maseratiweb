const setLocals = (req, res, next) => {
    res.locals.fmessage = NaN
    next()
}

module.exports = setLocals
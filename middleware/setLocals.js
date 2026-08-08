const setLocals = (req, res, next) => {
    res.locals.fMessage = NaN
    next()
}

module.exports = setLocals
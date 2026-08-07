const dbSetStatus = (status) => (req, res, next) => {
    req.isDBConnected = status
    res.locals.dbFail = !status
    if (!status) {
        res.clearCookie('user')
    }
    next()
}

module.exports = dbSetStatus
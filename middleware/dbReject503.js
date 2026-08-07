const dbReject503 = (req, res, next) => {
    if (!req.isDBConnected){
        return res.status(503).render("error", { error: "Service unavailable: database is unavailable." })
    }
    next()
}

module.exports = dbReject503
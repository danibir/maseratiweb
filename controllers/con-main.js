const sendMetaData = require('../handlers/sendMetaData')
const setFMessage = require('../handlers/setFMessage')

const index_get = (req, res) => {
    sendMetaData(req, res, "index get", "Hjem")
    setFMessage(res, "warning", "Dette nettstedet er ikke ferdig ennå. Kom senere.")
    res.render('index')
}


module.exports = {
    index_get
}
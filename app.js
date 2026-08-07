//variables

const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const os = require('os')
const path = require('path')
const env = require("dotenv")
env.config()

const router_main = require('./routers/rou-main')

const db = require('./handlers/connectDb')
const renderErrorPage = require('./handlers/renderErrorPage')

const setLocals = require('./middleware/setLocals')
const dbSetStatus = require('./middleware/dbSetStatus')
const setFMessageM = require('./middleware/setFMessageM')

const app = express()
//config

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(setLocals)

//routers
Promise.all([
    db.mainDb.asPromise(),
])
.then(()=>{
    dbSetStatus(true)
    console.log('Database connection success.')
})
.catch((err)=>{
    dbSetStatus(false)
    setFMessageM('warning', "Advarsel! Mangler tilgang til databasen, noen sider er ikke tilgjenglige.")
    console.log(`Database connection failure. Error: ${err}`)
})
.finally(()=>{
    app.use('/', router_main)
    app.use((req, res) => {
        renderErrorPage(res, 404, "No page found.")
    })
    app.listen(3000)
})
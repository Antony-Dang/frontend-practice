import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

import restaurantsDAO from "./dao/questionsDAO.js"
import questionsDAO from "./dao/questionsDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
        process.env.TRIVIA_DB_URI, {
            maxPoolSize: 50,
            wtimeoutMS: 2500,
            useNewUrlParser:true
        }
    )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {

        await questionsDAO.injectDB(client)

        app.listen(port, () => {
            console.log(`listening on port ${port} index.js`)
          })
    }) 
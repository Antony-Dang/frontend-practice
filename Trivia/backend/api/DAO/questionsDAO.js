import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let questions

export default class questionsDAO {
    static async injectDB(conn) {
      if (questions) {
        return
      }
      try {
        questions = await conn.db(process.env.TRIVIA_NS).collection("questions")
      } catch (e) {
        console.error(
          `Unable to establish a collection handle in restaurantsDAO: ${e} questions`,
        )
      }
    }
}
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

    static async getQuestions({
      filters = null,
    } = {}) {
      let query 
      if (filters) {
        if ("question" in filters) {
          query = { $text: { $search: filters["question"]}}
        } else if ("question_id" in filters) {
          query = { $question_id: { $eq: filters["question_id"]}}
        } else if ("answer_id" in filters) {
          query = { $answer_id: { $eq: filters["answer_id"]}}
        }
        
      }
      let cursor;

      try {
        cursor = await questions.find(query);
      } catch (e) {
        console.error(`Unable to issue find command, ${e} questionsDAO`)
        return { questionsList: [], totalQuestions: 0 }
      }

      try {
        let questionsList = await cursor.toArray();
        let totalNumQuestions = await question.countDocuments(query);

        return {questionsList, totalNumQuestions};
      } catch (e) {
        console.error(
          `Unable to convert cursor to array or problem counting documents, ${e}`,
        )
        return { questionsList: [], totalNumQuestions: 0};
      }
    }

}
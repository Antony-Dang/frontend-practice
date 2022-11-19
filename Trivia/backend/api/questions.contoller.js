import questionsDAO from "../dao/questionsDAO";

export default class questionsController {

    static async apiGetQuestions(req, res, next) {
        let filters = {}

        if (req.query.question) {
            filters.question = req.query.question
        } else if (req.query.question_id) {
            filters.question_id = req.query.question_id
        } else if (req.query.answer_id) {
            filters.answer_id = req.query.answer_id
        }

        let { questionsList, totalNumQuestions } = await questionsDAO.getQuestions({
            filters
        });
    
        let questionsResponse = {
            questions: questionsList,
            filters: filters,
            total_num_questions: totalNumQuestions
        }
    
        res.join(questionsResponse)
    }

}
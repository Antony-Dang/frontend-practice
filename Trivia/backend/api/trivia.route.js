import express from "express"
import questionsController from "./questions.controller.js"

const router = express.Router();

router.route("/").get(questionsController.apiGetQuestions);

export default router
import express from "express"

const router = express.Router();

router.route("/").get((req, res) => res.send("hello world from trivia.route.js"));

export default router
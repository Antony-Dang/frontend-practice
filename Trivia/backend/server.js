import express from "express";
import cors from "cors"
import questions from "./api/questions.js"

const app = express();
    
app.use(cors());
app.use(express.json());

app.use('/api/v1/questions', questions);
app.use("*", (req, res) => res.status(404).json({error: "not found"}));

require('dotenv').config();

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});


export default app
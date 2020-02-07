import express from 'express';
import bodyParser from 'body-parser';
import dbConfig from "./config/db";

const app = express();

dbConfig();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(PORT, err => {
    if(err) {
        console.error(err);
    } else {
        console.log(`App listen to port: ${PORT}`);
    }
})
const express = require("express");
const mongodb = require("./db/connect");
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require("./routes"));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`DB is connected and node is running on port ${port}.`);
        })
    }
})

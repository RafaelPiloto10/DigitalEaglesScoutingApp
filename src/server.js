const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("/");
});

app.post("/", (req, res) => {
    // Root folder
    if (fs.existsSync("../teams")) {
        // Team folder
        if (fs.existsSync("./../teams/" + req.body['Scouting Team'])) {
            fs.writeFileSync("./../teams/" + req.body['Scouting Team'] + "/match_" + req.body['Match Number'] +
                ".json", JSON.stringify(req.body));
        } else {
            // Create team folder
            fs.mkdirSync("./../teams/" + req.body['Scouting Team']);
            fs.writeFileSync("./../teams/" + req.body['Scouting Team'] + "/match_" + req.body['Match Number'] +
                ".json", JSON.stringify(req.body));
        }
    } else {
        // create root folder
        fs.mkdirSync("./../teams");
        fs.mkdirSync("./../teams/" + req.body['Scouting Team']);
        fs.writeFileSync("./../teams/" + req.body['Scouting Team'] + "/match_" + req.body['Match Number'] +
            ".json", JSON.stringify(req.body));
    }
});

app.listen(PORT, () => {
    console.log("Server is now listening on port: " + PORT);
});
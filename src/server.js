const express = require("express");
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const app = express();

app.use(express.static('dist'));
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/test", function (req, res) {
    res.send('test');
});

app.get("/bundle/generate", function (req, res) {
    fs.appendFile('./dist/mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.send("Bundle generate");
});



app.post('/api/scene/add', function(req, res) {
    // Load default sceen and update name.
    const scenePath = './dist/bundle/scenes/default-scene.yaml';

    if (!fs.existsSync(scenePath)) {
        const defaultScene = yaml.safeLoad(fs.readFileSync(scenePath, 'utf8'));
        defaultScene.name = req.body.name;
    
        // Convert updated scene object back into yaml string.
        const scene = yaml.safeDump(defaultScene);
    
        fs.writeFile(`./dist/bundle/scenes/${req.body.name}.yaml`, scene, function (err) {
            if (err) throw err;
            console.log(scene);
        });
    }
});

// Get specific scene.
app.get('/api/scene/get/:sceneName', function(req, res) {
    const doc = yaml.safeLoad(fs.readFileSync(`./dist/bundle/scenes/${req.params.sceneName}.yaml`, 'utf8'));
    res.json(doc);
});

// Save
app.post('/api/scene/save', function(req, res) {
    // TODO: Actually implement this code.
    const doc = yaml.safeLoad(fs.readFileSync(`./dist/bundle/scenes/${req.body.name}.yaml`, 'utf8'));
    res.json(doc);
});

// Delete
app.get('/api/scene/delete/:sceneName', function(req, res) {
    fs.unlinkSync(`./dist/bundle/scenes/${req.params.sceneName}.yaml`)
});

// List all
app.get('/api/scene/list', function(req, res) {
    res.json(fs.readdirSync(`./dist/bundle/scenes/`));
});

app.get('/bundle/play', function (req, res) {
    res.sendFile(path.join(__dirname + '/play.html'));
});

app.listen(9000);

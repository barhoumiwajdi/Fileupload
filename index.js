const express = require('express');
const multer = require('multer');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const File = require('./Model/Filamanger');

const upload = multer({ dest: 'uploads/' });

const app = express();


require('./Database/Connect')


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json({ limit: "52428800" }));
app.post('/upload', upload.single('file'), (req, res) => {
    // Save the file details to the database

    try {
        const file = {
            name: req.file.originalname,
            path: req.file.path,
            size: req.file.size,
        };
        File.create(file)
        res.send({ message: 'uploaded ' })
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur ' })

    }



});

// Implement other endpoints as needed

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
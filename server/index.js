const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');

const fs = require('fs');
const path = require('path');

require('dotenv').config();

const Image = require('./models');

const app = express();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.diskStorage({
  destination: 'images/',
  filename: (req, file, cb) => {
    const [name] = file.originalname.split('.');
    const filename = name + '-' + Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  res.json({ greeting: 'Welcome to Image Uploader!' });
});

app.get('/images/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    const imgBase64 = image.img.data.toString('base64');
    res.status(200).json({ src: `data:image/png;base64,${imgBase64}` });
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

app.get('/download/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    res.status(200).sendFile('/images/' + image.filename, {
      root: './',
      headers: {
        'Content-Type': image.img.contentType,
      },
    });
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

app.post('/', upload.single('image'), (req, res) => {
  const newImage = new Image({
    img: {
      data: fs.readFileSync(
        path.join(__dirname + '/images/' + req.file.filename)
      ),
      contentType: req.file.mimetype,
    },
    filename: req.file.filename,
  });

  newImage
    .save()
    .then((image) => {
      res.status(201).json(image);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT);
});

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: '../downloads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const fileName = req.file.originalname;
  const filePath = path.resolve(__dirname, '..', 'downloads', fileName);

  fs.rename(req.file.path, filePath, (error) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to save file' });
    }

    res.json({ message: 'File uploaded successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

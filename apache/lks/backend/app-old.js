const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: '../downloads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Get the file name and destination path
  const fileName = req.file.originalname;
  console.log(fileName);
  const filePath = path.resolve(__dirname, '..', 'downloads', fileName);

  // const filePath = path.join(__dirname, 'uploads', fileName);
  console.log(filePath)

  // Move the file to the desired location
  req.file.path = filePath;

  // Send a response indicating successful upload
  res.json({ message: 'File uploaded successfully' });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

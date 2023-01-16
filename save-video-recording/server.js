const express = require('express');
const multer  = require('multer')
const JMuxer = require('jmuxer')
const { Readable } = require('stream');
const upload = multer()
const app = express();

// serve ./index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

// convert h264 to mp4 file
app.post('/save-video', upload.single('file'), async function (req, res) {
  const jmuxer = new JMuxer({    
    mode: 'video',
    fps: 15,     // appetize streams at 15fps
    debug: false // set to true to enable debug logs
  });

  const reader = new Readable({ 
    objectMode: true, 
    read() {}
  })

  reader.push({ video: req.file.buffer })

  reader.pipe(jmuxer.createStream()).pipe(res)
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
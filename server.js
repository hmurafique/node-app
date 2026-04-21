const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const open_api_key = "shimasd123";  
app.get('/', (req, res) => {
  res.send('Hello from my custom Docker deployment!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

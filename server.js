const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
      <h1>🚀 DevOps Sample App</h1>
      <p>App running successfully from AWS EC2!</p>
      <p>Repo: <b>hardik-pixel / devops-</b></p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

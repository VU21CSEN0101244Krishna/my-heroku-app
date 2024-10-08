const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Application!</h1><p>This is a Node.js application running on Render.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

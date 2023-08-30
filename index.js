const express = require('express');
const port = 8000;
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Express + Typescript');
});
app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
});

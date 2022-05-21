const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();
app.get('/', (req, res) => {
    res.send('HELLO POSTGRESS + 88cc');
});

app.listen(PORT, () => console.log(`server started ${PORT}`));

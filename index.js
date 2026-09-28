
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to [object Object]</h1><p>Project created by Dham AI Command Center.</p>');
});

app.get('/ping', (req, res) => {
    res.json({ status: 'ok', project: '[object Object]', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`✅ [object Object] is running on port ${PORT}`);
});
        
import express from 'express';

const app = express();
//configuration for server
app.set("port", process.env.PORT || 3000);
app.set("env", 'DEV');

app.get('/', (req, res) => {
    res.send('Hello world');
});

export default app;
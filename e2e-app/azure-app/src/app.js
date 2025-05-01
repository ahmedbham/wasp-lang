const express = require('express');
const bodyParser = require('body-parser');
const { DatabaseService } = require('./services/database');
const { StorageService } = require('./services/storage');
const { KeyVaultService } = require('./services/keyvault');
const { AuthService } = require('./services/auth');
const config = require('./config');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const databaseService = new DatabaseService();
const storageService = new StorageService();
const keyVaultService = new KeyVaultService();
const authService = new AuthService();

app.get('/', (req, res) => {
    res.send('Welcome to the Azure App Service!');
});

// Example route for database interaction
app.get('/api/data', async (req, res) => {
    try {
        const data = await databaseService.query('SELECT * FROM myTable');
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Example route for file upload
app.post('/api/upload', async (req, res) => {
    try {
        const fileUrl = await storageService.upload(req.body.file);
        res.json({ url: fileUrl });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Example route for getting a secret
app.get('/api/secret/:name', async (req, res) => {
    try {
        const secret = await keyVaultService.getSecret(req.params.name);
        res.json(secret);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Example route for login
app.post('/api/login', async (req, res) => {
    try {
        const token = await authService.login(req.body.username, req.body.password);
        res.json({ token });
    } catch (error) {
        res.status(401).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
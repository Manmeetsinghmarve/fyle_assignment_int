const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/api/repositories/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const page = req.query.page || 1;
        const perPage = Math.min(req.query.perPage || 10, 100);
        const startIndex = (page - 1) * perPage;
        const endIndex = page * perPage;

        // Assuming the following structure for the GitHub API response
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repositories = response.data.map(repo => ({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            topics: repo.topics || [], // Handle the case where topics may be undefined
        }));

        const paginatedRepositories = repositories.slice(startIndex, endIndex);
        const totalPages = Math.ceil(repositories.length / perPage);

        res.json({ repositories: paginatedRepositories, totalPages });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: 'Unable to fetch repositories.' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

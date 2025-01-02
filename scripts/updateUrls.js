app.get('/update-urls', async (req, res) => {
    try {
        await client.connect();
        const result = await client.query(`
            UPDATE works
            SET imageUrl = REPLACE(imageUrl, 'http://localhost:5678', 'https://portfolio-architecte-backend.onrender.com');
        `);
        await client.end();
        res.status(200).send(`Mise à jour réussie : ${result.rowCount} lignes modifiées`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la mise à jour');
    }
});

const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors'); 

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'covid',
  port: 5432,
});

client.connect();
app.use(cors());
app.use(bodyParser.json());
app.get('/covid19data', async (req, res) => {
  console.log(req.query.dataType)
  const datatype = req.query.dataType;
  try {
	console.log(datatype)
    const result = await client.query(`SELECT countryregion,${req.query.dataType} FROM covidcountry`);
    const data = result.rows;
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching COVID-19 data from PostgreSQL:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
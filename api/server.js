/* This file is part of Anthony's Personal Finances App.
Copyright © 2024 - Anthony Buitrago

This blog is licensed under the GNU General Public License v3.0.
See the LICENSE file in the root of this project for details. */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getDollarRate = require('./getDollarRate');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = ['https://finances.n48.dev', 'http://127.0.0.1:5500'];
app.use(cors({
  origin: allowedOrigins
}));

app.get('/api/dollar-rate', async (req, res) => {
  try {
    const rate = await getDollarRate();
    res.status(200).json({ usd_to_cop: rate });
  } catch (error) {
    console.error('❌ Error al obtener la tasa de cambio:', error.message);
    console.error('📋 Detalles del error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

/* This file is part of Anthony's Personal Finances App.
Copyright © 2024 - Anthony Buitrago

This blog is licensed under the GNU General Public License v3.0.
See the LICENSE file in the root of this project for details. */
require('dotenv').config();
const axios = require('axios');
const Redis = require('ioredis');

// Configuración de Redis usando ioredis
let redis;

function getRedisClient() {
  if (!redis || redis.status !== 'ready') {
    redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
      tls: {},
    });
  }
  return redis;
}

const API_KEY = process.env.CURRENCYFREAKS_APIKEY;
const API_URL = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}&symbols=COP`;

const getDollarRate = async () => {
  try {
    const redisClient = getRedisClient();

    // Verificar si hay datos en caché
    const cachedData = await redisClient.get('usd_cop_rate');
    const lastFetched = await redisClient.get('usd_cop_last_fetched');
    const now = Date.now();

    if (cachedData && lastFetched && (now - lastFetched) < 24 * 60 * 60 * 1000) {
      return parseFloat(cachedData);
    }

    // Consultar la API si no hay datos en caché o si están desactualizados
    const response = await axios.get(API_URL);
    if (response.status !== 200) throw new Error(`API Error: ${response.status}`);

    const rate = response.data.rates?.COP;
    if (!rate) throw new Error('No se encontró la tasa de COP en la respuesta de la API');

    // Guardar la nueva tasa en Redis
    await redisClient.set('usd_cop_rate', rate);
    await redisClient.set('usd_cop_last_fetched', now);

    return parseFloat(rate);
  } catch (error) {
    console.error('❌ Error al obtener la tasa de cambio:', error.message);
    throw error;
  }
};

module.exports = getDollarRate;

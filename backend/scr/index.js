const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * app.use(cors({
 *  origin: http://linkSeguro.com.br
 * }))
 */
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros  utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * npm start
 * Para iniciar servidor de desenvolvimento
 */
app.listen(3333);
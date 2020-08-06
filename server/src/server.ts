import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// Para o express entender o formato json
app.use(express.json());
// Para que outros endereços possam acessar a api
app.use(cors());

// http://localhost:3333/users
// /users - é um resource!!!

// Parametros
// body -> criação ou atualização da informação
// Route params => identificar um recurso. (Atualizar/deletar)
// Query params -> paginação, outras informações de pesquisa basicamente

// Usar o arquivo das rotas
app.use(routes);

app.listen(3333, () => {
    console.log('🐺 Server running.')
});
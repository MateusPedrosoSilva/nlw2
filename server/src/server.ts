import express, { response } from 'express';

const app = express();

// Para o express entender o formato json
app.use(express.json());

// http://localhost:3333/users
// /users - é um resource!!!

// Parametros
// body -> criação ou atualização da informação
// Route params => identificar um recurso. (Atualizar/deletar)
// Query params -> paginação, outras informações de pesquisa basicamente

app.get('/', (request, response) => {
    return response.json({ message: 'Helloooooo!' });
});

app.listen(3333, () => {
    console.log('🐺 Server running.')
});
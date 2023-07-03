import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import router from './routers';
import { handleApplicationErrors } from './middlewares/error';

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use(router)
  .use(handleApplicationErrors);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

export default app;
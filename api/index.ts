import express  from'express'

import menu from './router/menu'

const app = express();

app.use('/menu', menu)

export default app;

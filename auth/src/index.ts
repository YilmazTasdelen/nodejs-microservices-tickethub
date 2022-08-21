import express from 'express';
import { json } from 'body-parser';

import { cunrrentUserRouter } from './routes/current-user';

const app = express();
app.use(json());

app.use(cunrrentUserRouter);

app.listen(3000, () => {
    console.log('Listeing on port 3000');
});
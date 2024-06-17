import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routeInvoice from './routes/routeInvoice';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/inovices', routeInvoice);

export default app;

import express from 'express';
import bodyParser from 'body-parser';
import invoiceRoutes from './routes/routeInvoice';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', invoiceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

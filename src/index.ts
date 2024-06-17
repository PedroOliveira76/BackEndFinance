import express from 'express';
import bodyParser from 'body-parser';
import { getAllInvoices, createInvoice, getInvoiceById, updateInvoice, deleteInvoice, HelloWorld } from './controller/invoiceController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', HelloWorld)
app.get('/invoices', getAllInvoices);
app.post('/invoices', createInvoice);
app.get('/invoices/:id', getInvoiceById);
app.put('/invoices/:id', updateInvoice);
app.delete('/invoices/:id', deleteInvoice);

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
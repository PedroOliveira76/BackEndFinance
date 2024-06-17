//Invoices == Fatura

import express from 'express';
import * as invoiceController from '../controller/invoiceController';

const router = express.Router();

router.get('/invoices', invoiceController.getAllInvoices);
router.post('/invoices', invoiceController.createInvoice);
router.get('/invoices/:id', invoiceController.getInvoiceById);
router.put('/invoices/:id', invoiceController.updateInvoice);
router.put('/invoices/:id', invoiceController.deleteInvoice);

export default router;
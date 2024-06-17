"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const invoiceController_1 = require("./controller/invoiceController");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.get('/', invoiceController_1.HelloWorld);
app.get('/invoices', invoiceController_1.getAllInvoices);
app.post('/invoices', invoiceController_1.createInvoice);
app.get('/invoices/:id', invoiceController_1.getInvoiceById);
app.put('/invoices/:id', invoiceController_1.updateInvoice);
app.delete('/invoices/:id', invoiceController_1.deleteInvoice);
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});

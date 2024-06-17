"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInvoice = exports.updateInvoice = exports.getInvoiceById = exports.createInvoice = exports.getAllInvoices = exports.HelloWorld = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const HelloWorld = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Olá mundo');
        res.status(200).json('HELLO WORLD');
    }
    catch (error) {
        res.status(500).json('erro no servidor');
    }
});
exports.HelloWorld = HelloWorld;
const getAllInvoices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield prisma_1.default.fatura.findMany();
        res.status(200).json(invoices);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao buscar as faturas' });
    }
});
exports.getAllInvoices = getAllInvoices;
const createInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numeroFatura, dataEmissao, dataVencimento, dataPagamento, quantia, status, documentoFatura, documentoBoleto, nomePagador } = req.body;
    try {
        const newInvoice = yield prisma_1.default.fatura.create({
            data: {
                numeroFatura,
                dataEmissao: new Date(dataEmissao),
                dataVencimento: new Date(dataVencimento),
                dataPagamento: dataPagamento ? new Date(dataPagamento) : null,
                quantia,
                status,
                documentoFatura,
                documentoBoleto,
                nomePagador,
            }
        });
        res.status(201).json(newInvoice);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao criar fatura' });
    }
});
exports.createInvoice = createInvoice;
const getInvoiceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const invoice = yield prisma_1.default.fatura.findUnique({
            where: { id: parseInt(id, 10) },
        });
        if (!invoice) {
            res.status(404).json({ error: 'Fatura não encontrada' });
            return;
        }
        res.status(200).json(invoice);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao buscar fatura' });
    }
});
exports.getInvoiceById = getInvoiceById;
const updateInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { numeroFatura, dataEmissao, dataVencimento, dataPagamento, quantia, status, documentoFatura, documentoBoleto, nomePagador } = req.body;
    try {
        const updatedInvoice = yield prisma_1.default.fatura.update({
            where: { id: parseInt(id, 10) },
            data: {
                numeroFatura,
                dataEmissao: new Date(dataEmissao),
                dataVencimento: new Date(dataVencimento),
                dataPagamento: dataPagamento ? new Date(dataPagamento) : null,
                quantia,
                status,
                documentoFatura,
                documentoBoleto,
                nomePagador
            }
        });
        res.status(200).json(updatedInvoice);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao atualizar fatura' });
    }
});
exports.updateInvoice = updateInvoice;
const deleteInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma_1.default.fatura.delete({
            where: { id: parseInt(id, 10) },
        });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete invoice' });
    }
});
exports.deleteInvoice = deleteInvoice;

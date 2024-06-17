import { Request, Response } from 'express';
import prisma from '../prisma';
import { Fatura,FaturaStatus } from '../interfaces';

export const HelloWorld = async (req: Request, res: Response): Promise<void> => {
    try {

        console.log('Olá mundo');

        res.status(200).json('HELLO WORLD')
    } catch (error) {
        res.status(500).json('erro no servidor')
    }
}

export const getAllInvoices = async (req: Request, res: Response): Promise<void> => {

    try {
        const invoices = await prisma.fatura.findMany();
        res.status(200).json(invoices);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao buscar as faturas' });
    }
};

export const createInvoice = async (req: Request, res: Response): Promise<void> => {

    const { numeroFatura, dataEmissao, dataVencimento, dataPagamento, quantia, status, documentoFatura, documentoBoleto,nomePagador }:Fatura = req.body;

    try {
        const newInvoice = await prisma.fatura.create({
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao criar fatura' });
    }
}

export const getInvoiceById = async (req: Request, res: Response): Promise<void> => {

    const { id } = req.params;

    try {
        const invoice = await prisma.fatura.findUnique({
            where: { id: parseInt(id, 10) },
        });

        if (!invoice) {
            res.status(404).json({ error: 'Fatura não encontrada' });
            return;
        }

        res.status(200).json(invoice);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao buscar fatura' });
    }

}

export const updateInvoice = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { numeroFatura, dataEmissao, dataVencimento, dataPagamento, quantia, status, documentoFatura, documentoBoleto, nomePagador }:Fatura = req.body;

    try {
        const updatedInvoice = await prisma.fatura.update({
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao atualizar fatura' });
    }
}
export const deleteInvoice = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await prisma.fatura.delete({
            where: { id: parseInt(id, 10) },
        });
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete invoice' });
    }
}

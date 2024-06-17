// src/interfaces.ts

export interface Fatura {
  id: number;
  numeroFatura: string;
  dataEmissao: Date;
  dataVencimento: Date;
  dataPagamento: Date | null;
  quantia: number;
  status: FaturaStatus;
  documentoFatura: string;
  documentoBoleto: string;
  nomePagador: string;
}



export enum FaturaStatus {
  EMITIDO = 'EMITIDO',
  COBRADA = 'COBRADA',
  VENCIDA = 'VENCIDA',
  PAGO = 'PAGO',
}

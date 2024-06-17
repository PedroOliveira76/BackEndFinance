-- CreateTable
CREATE TABLE `Fatura` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroFatura` VARCHAR(191) NOT NULL,
    `dataEmissao` DATETIME(3) NOT NULL,
    `dataVencimento` DATETIME(3) NOT NULL,
    `dataPagamento` DATETIME(3) NULL,
    `quantia` DOUBLE NOT NULL,
    `status` ENUM('EMITIDO', 'COBRADA', 'VENCIDA', 'PAGO') NOT NULL,
    `documentoFatura` VARCHAR(191) NOT NULL,
    `documentoBoleto` VARCHAR(191) NOT NULL,
    `nomePagador` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

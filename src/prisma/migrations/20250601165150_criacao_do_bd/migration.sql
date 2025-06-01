-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarefa` (
    `id` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(50) NOT NULL,
    `status` VARCHAR(100) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `prioridade` VARCHAR(100) NOT NULL,
    `validade` DATETIME(3) NOT NULL,
    `ctg_id` INTEGER NOT NULL,
    `Usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tarefa` ADD CONSTRAINT `tarefa_ctg_id_fkey` FOREIGN KEY (`ctg_id`) REFERENCES `categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tarefa` ADD CONSTRAINT `tarefa_Usuario_id_fkey` FOREIGN KEY (`Usuario_id`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

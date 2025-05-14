/*
  Warnings:

  - Added the required column `Usuario_id` to the `Tarefas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ctg_id` to the `Tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tarefas` ADD COLUMN `Usuario_id` INTEGER NOT NULL,
    ADD COLUMN `ctg_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Tarefas` ADD CONSTRAINT `Tarefas_ctg_id_fkey` FOREIGN KEY (`ctg_id`) REFERENCES `categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tarefas` ADD CONSTRAINT `Tarefas_Usuario_id_fkey` FOREIGN KEY (`Usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

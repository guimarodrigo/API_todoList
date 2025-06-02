/*
  Warnings:

  - You are about to drop the column `Usuario_id` on the `tarefa` table. All the data in the column will be lost.
  - Added the required column `usuario_id` to the `tarefa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tarefa` DROP FOREIGN KEY `tarefa_Usuario_id_fkey`;

-- DropIndex
DROP INDEX `tarefa_Usuario_id_fkey` ON `tarefa`;

-- AlterTable
ALTER TABLE `tarefa` DROP COLUMN `Usuario_id`,
    ADD COLUMN `usuario_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `tarefa` ADD CONSTRAINT `tarefa_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

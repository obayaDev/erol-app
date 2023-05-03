/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `branches` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[branch]` on the table `branches` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `branches_name_key` ON `branches`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `branches_branch_key` ON `branches`(`branch`);

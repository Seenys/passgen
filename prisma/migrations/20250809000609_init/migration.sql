-- CreateTable
CREATE TABLE "PasswordConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "length" INTEGER NOT NULL DEFAULT 4,
    "useUppercase" BOOLEAN NOT NULL DEFAULT false,
    "useLowercase" BOOLEAN NOT NULL DEFAULT false,
    "useNumbers" BOOLEAN NOT NULL DEFAULT false,
    "useSymbols" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Password" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "encryptedPassword" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "configId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Password_configId_fkey" FOREIGN KEY ("configId") REFERENCES "PasswordConfig" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

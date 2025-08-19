-- CreateTable
CREATE TABLE "Password" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "encryptedPassword" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "length" INTEGER NOT NULL DEFAULT 4,
    "useUppercase" BOOLEAN NOT NULL DEFAULT false,
    "useLowercase" BOOLEAN NOT NULL DEFAULT false,
    "useNumbers" BOOLEAN NOT NULL DEFAULT false,
    "useSymbols" BOOLEAN NOT NULL DEFAULT false
);

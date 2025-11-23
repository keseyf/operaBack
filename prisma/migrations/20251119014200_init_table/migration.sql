-- CreateTable
CREATE TABLE "Donate" (
    "id" TEXT NOT NULL,
    "name" CHAR(50) NOT NULL,
    "message" TEXT,
    "donate" DOUBLE PRECISION NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Donate_pkey" PRIMARY KEY ("id")
);

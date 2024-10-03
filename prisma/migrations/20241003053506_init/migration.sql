-- CreateTable
CREATE TABLE "todo" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

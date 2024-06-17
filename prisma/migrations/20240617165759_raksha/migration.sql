-- CreateTable
CREATE TABLE "JobPosting" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "salary" DOUBLE PRECISION DEFAULT 0,
    "location" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "img" TEXT,
    "employmentType" TEXT,
    "contact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobPosting_pkey" PRIMARY KEY ("id")
);

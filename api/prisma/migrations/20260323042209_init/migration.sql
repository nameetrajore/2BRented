-- CreateTable
CREATE TABLE "Bike" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL,
    "locationState" TEXT NOT NULL,
    "locationCity" TEXT NOT NULL,
    "locationPincode" INTEGER NOT NULL,
    "locationAddress" TEXT NOT NULL,
    "locationGmapLink" TEXT,
    "type" TEXT NOT NULL,
    "transmission" TEXT,
    "fuelType" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "bookingDates" TIMESTAMP(3)[],
    "dailyRate" DOUBLE PRECISION NOT NULL,
    "kmsDriven" INTEGER NOT NULL,
    "bikeAge" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "reviews" JSONB NOT NULL DEFAULT '[]',
    "mileage" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT[],
    "ownerId" TEXT,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "locationState" TEXT NOT NULL,
    "locationCity" TEXT NOT NULL,
    "locationPincode" INTEGER NOT NULL,
    "locationAddress" TEXT NOT NULL,
    "customerPhoneNumber" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerPassword" TEXT NOT NULL,
    "customerDrivingLicense" TEXT,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "locationState" TEXT NOT NULL,
    "locationCity" TEXT NOT NULL,
    "locationPincode" INTEGER NOT NULL,
    "locationAddress" TEXT NOT NULL,
    "ownerPhoneNumber" TEXT NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    "ownerPassword" TEXT NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" TEXT NOT NULL,
    "managerName" TEXT NOT NULL,
    "managerDesignation" TEXT NOT NULL,
    "managerPhoneNumber" TEXT NOT NULL,
    "managerEmail" TEXT NOT NULL,
    "managerPassword" TEXT NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "bikeId" TEXT,
    "bikeName" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "pickupLocation" TEXT NOT NULL,
    "dropLocation" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "customerId" TEXT,
    "paymentId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Query" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Query_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CustomerFavourites" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customerEmail_key" ON "Customer"("customerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "_CustomerFavourites_AB_unique" ON "_CustomerFavourites"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomerFavourites_B_index" ON "_CustomerFavourites"("B");

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerFavourites" ADD CONSTRAINT "_CustomerFavourites_A_fkey" FOREIGN KEY ("A") REFERENCES "Bike"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerFavourites" ADD CONSTRAINT "_CustomerFavourites_B_fkey" FOREIGN KEY ("B") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

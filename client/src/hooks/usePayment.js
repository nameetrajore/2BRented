import { useSelector } from "react-redux";
import axios from "axios";
import { createSearchParams } from "react-router-dom";

export const usePayment = () => {
  const id = useSelector((state) => state.auth._id);
  const checkout = async (amount, bike, booking, customer, paymentId) => {
    const response = await fetch(
      `http://localhost:4000/api/customers?_id=${id}`
    );

    const jsonRes = await response.json();

    const user = jsonRes[0];

    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/get-key");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "2BRented",
      description: `${bike.brand} ${bike.model} ${bike.year.substring(0, 4)}`,
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `http://localhost:4000/api/payment-verification?orderId=${order.id}`,
      prefill: {
        name: user.customerName,
        email: user.customerEmail,
        contact: user.customerPhoneNumber,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#33b3a6",
      },
    };

    const rzp1 = window.Razorpay(options);
    rzp1.open();

    console.log(booking);
    const params = {
      bike: bike._id,
      bikeName: `${bike.brand} ${bike.model} ${bike.year.substring(0, 4)}`,
      startDate: booking.pickupDate,
      endDate: booking.dropDate,
      pickupLocation:
        booking.pickupLocation.substring(0, 1).toUpperCase() +
        booking.pickupLocation
          .substring(1, booking.pickupLocation.length)
          .toLowerCase(),
      dropLocation:
        booking.dropLocation.substring(0, 1).toUpperCase() +
        booking.dropLocation
          .substring(1, booking.dropLocation.length)
          .toLowerCase(),
      totalAmount: amount,
      customer: id,
      paymentId: order.id,
      status: "completed",
    };

    const responseBooking = await axios.post(
      `http://localhost:4000/api/bookings`,
      params
    );
  };

  return { checkout };
};

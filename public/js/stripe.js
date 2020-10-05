import { showAlert } from './alerts';

const stripe = Stripe('pk_test_hN3H7PCjTT2Uu5Kg2W0NU1Zm');

export const bookTour = async tourId => {
  try {
    const session = await fetch(
      `http://127.0.0.1:5000/api/v1/bookings/checkout-session/${tourId}`
    );
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    showAlert('error', error);
  }
};

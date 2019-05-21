export default {
    server: process.env.REACT_APP_SERVER || 'http://localhost:3000',
    publicURL: process.env.PUBLIC_URL,
    stripeKey: process.env.REACT_APP_STRIPE_KEY,
  }
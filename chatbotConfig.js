/**
 * Configuration for the chatbot
 * Easily modify responses and behavior without changing component code
 */

// Welcome message shown when bot first loads
export const WELCOME_MESSAGE = "Hi there! How can I help you today?";

// Default fallback response when no keyword match is found
export const DEFAULT_RESPONSE = "I'm not sure I understand. Try asking about our services, booking process, pricing, or contact information.";

// Response delay in milliseconds (for a more natural conversation flow)
export const RESPONSE_DELAY = 600;

// Keyword-based responses for the chatbot
export const BOT_RESPONSES = {
  // Greetings
  'hello': 'Hello! How can I assist you with your home service needs?',
  'hi': 'Hi there! How can I help you today?',
  'hey': 'Hey! How can I assist you?',
  
  // Service-related queries
  'services': 'We offer plumbing, electrical, cleaning, painting, and carpentry services. What do you need help with?',
  'plumbing': 'Our plumbing services include pipe repairs, fixture installations, drain cleaning, and water heater services. Would you like to book a plumber?',
  'electrical': 'Our electrical services include wiring, lighting installation, outlet repairs, and electrical panel upgrades. Would you like to book an electrician?',
  'cleaning': 'Our cleaning services include regular home cleaning, deep cleaning, move-in/move-out cleaning, and commercial cleaning. Would you like to book a cleaning service?',
  'painting': 'Our painting services include interior painting, exterior painting, deck staining, and wallpaper installation. Would you like to book a painter?',
  'carpentry': 'Our carpentry services include furniture assembly, cabinet installation, door repairs, and custom woodworking. Would you like to book a carpenter?',
  
  // Booking-related queries
  'booking': 'You can book a service by logging in as a customer and selecting the service you need.',
  'schedule': 'To schedule a service, go to the service page, select the desired dates, and follow the booking process.',
  'appointment': 'To make an appointment, browse our services, select the one you need, and choose your preferred date and time.',
  'reschedule': 'You can reschedule a booking through your customer account under "My Bookings" section.',
  'cancel': 'You can cancel a booking through your customer account under "My Bookings" section.',
  
  // Customer account questions
  'account': 'You can create an account by clicking on the "Register" button and filling out the registration form.',
  'login': 'You can login by clicking on the "Login" button and entering your credentials.',
  'password': 'You can reset your password by clicking on the "Forgot Password" link on the login page.',
  'profile': 'You can update your profile information in the "My Profile" section after logging in.',
  
  // Payment and pricing
  'price': 'Our service prices vary based on the type of service and location. You can check detailed pricing after selecting a service.',
  'cost': 'The cost depends on the specific service and requirements. You can get a quote by selecting a service and entering your details.',
  'payment': 'We accept credit cards, debit cards, and online payment methods like PayPal.',
  'refund': 'Our refund policy allows for full refunds if canceled 24 hours before the scheduled service.',
  
  // Contact and support
  'contact': 'You can reach our customer support at support@homeservices.com or call 123-456-7890.',
  'phone': 'You can reach us by phone at 123-456-7890 during our business hours.',
  'email': 'You can email us at support@homeservices.com for any inquiries.',
  'hours': 'Our services are available from 8 AM to 6 PM, Monday through Saturday.',
  'location': 'We provide services in all major metropolitan areas. Please enter your zip code during booking to confirm availability.',
  
  // General help
  'help': 'I can help you with information about our services, booking process, pricing, contact information, and more. Just ask!',
  'about': 'We are a professional home services company providing high-quality services since 2010.',
  'guarantee': 'We offer a 100% satisfaction guarantee on all our services. If you\'re not satisfied, we\'ll fix it at no additional cost.',
  'covid': 'We follow strict COVID-19 protocols. All our professionals wear masks, maintain social distancing, and sanitize equipment regularly.',
};

// Whether to auto-open the chat bot on certain pages (by route)
export const AUTO_OPEN_ROUTES = [
  '/customerregistration', // Open automatically on registration page
  '/customerlogin',       // Open automatically on login page
]; 
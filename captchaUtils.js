import config from '../config';

/**
 * Validates a Google reCAPTCHA token with the backend
 * 
 * @param {string} token - The reCAPTCHA token to validate
 * @returns {Promise<boolean>} - Promise resolving to true if CAPTCHA is valid
 */
export const validateCaptcha = async (token) => {
  if (!token) return false;
  
  try {
    // In a real application, this would call your backend API to verify the token with Google
    // For now, we'll simulate a successful validation for any non-null token
    
    // Example of actual backend verification:
    // const response = await fetch(`${config.url}/verify-captcha`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ token })
    // });
    // return response.ok;
    
    // For development/demo, always return true if token exists
    return true;
  } catch (error) {
    console.error('Error validating CAPTCHA:', error);
    return false;
  }
};

/**
 * Checks if CAPTCHA should be skipped in the current environment
 * 
 * @returns {boolean} - True if CAPTCHA can be skipped
 */
export const shouldSkipCaptcha = () => {
  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Check if there's a development flag to skip CAPTCHA
  const skipCaptcha = localStorage.getItem('dev_skip_captcha') === 'true';
  
  return isDevelopment && skipCaptcha;
};

/**
 * Sets whether CAPTCHA should be skipped in development mode
 * 
 * @param {boolean} skip - Whether to skip CAPTCHA
 */
export const setSkipCaptcha = (skip) => {
  if (process.env.NODE_ENV === 'development') {
    localStorage.setItem('dev_skip_captcha', skip ? 'true' : 'false');
  }
}; 
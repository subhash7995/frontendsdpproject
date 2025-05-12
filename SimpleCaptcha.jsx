import { useState, useEffect } from 'react';
import '../styles/simple-captcha.css';

/**
 * SimpleCaptcha - A basic CAPTCHA component that doesn't rely on external services
 * 
 * @param {Object} props
 * @param {function} props.onChange - Function called when captcha is verified (receives token or null)
 */
const SimpleCaptcha = ({ onChange }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  
  // Generate a random captcha code
  const generateCaptcha = () => {
    // Generate a random string of 5 characters (letters and numbers)
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaText(result);
    setUserInput('');
    setIsVerified(false);
    
    if (onChange) {
      onChange(null);
    }
  };
  
  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);
  
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  
  const handleVerify = (e) => {
    e.preventDefault();
    
    if (userInput.toLowerCase() === captchaText.toLowerCase()) {
      setIsVerified(true);
      if (onChange) {
        // Send a mock token when verification is successful
        onChange('simple-captcha-verified');
      }
    } else {
      setIsVerified(false);
      if (onChange) {
        onChange(null);
      }
      // Regenerate captcha after failed attempt
      generateCaptcha();
    }
  };

  return (
    <div className="simple-captcha">
      <div className="captcha-container">
        <div className="captcha-text">{captchaText}</div>
        <button 
          type="button" 
          className="refresh-button" 
          onClick={generateCaptcha}
          aria-label="Refresh CAPTCHA"
        >
          ↻
        </button>
      </div>
      
      <div className="captcha-form">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter the code shown above"
          className="captcha-input"
          aria-label="CAPTCHA verification input"
        />
        <button 
          type="button" 
          className="verify-button"
          onClick={handleVerify}
        >
          Verify
        </button>
      </div>
      
      {isVerified && (
        <div className="verification-message success">
          Verification successful!
        </div>
      )}
    </div>
  );
};

export default SimpleCaptcha; 
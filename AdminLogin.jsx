import { useState, useEffect } from 'react';
import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext'; 
import CaptchaWrapper from '../components/CaptchaWrapper';
import '../styles/simple-captcha.css';
import '../styles/dev-mode.css';
import { validateCaptcha, shouldSkipCaptcha } from '../utils/captchaUtils';

export default function AdminLogin() 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [skipCaptcha, setSkipCaptcha] = useState(false);

  const navigate = useNavigate();

  const { setIsAdminLoggedIn} = useAuth();

  // Check if CAPTCHA should be skipped (development mode)
  useEffect(() => {
    setSkipCaptcha(shouldSkipCaptcha());
    
    // Add event listener for storage changes to detect when skip CAPTCHA is toggled
    const handleStorageChange = () => {
      setSkipCaptcha(shouldSkipCaptcha());
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleChange = (e) => 
  {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setCaptchaVerified(!!token);
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    // Skip CAPTCHA validation if in development mode and skip flag is set
    if (!skipCaptcha) {
      // Validate CAPTCHA
      if (!captchaVerified) {
        setError('Please complete the CAPTCHA verification');
        return;
      }

      // Verify the CAPTCHA token
      const isCaptchaValid = await validateCaptcha(captchaToken);
      if (!isCaptchaValid) {
        setError('CAPTCHA verification failed. Please try again.');
        return;
      }
    }

    try 
    {
      const response = await axios.post(`${config.url}/admin/checkadminlogin`, formData);
      if (response.status === 200) 
      {
        setIsAdminLoggedIn(true);
        navigate("/adminhome");
      }
      else 
      {
        setMessage(response.data);
      }
    } 
    catch (error) 
    {
      if (error.response) 
      {
        setError(error.response.data);
      } 
      else 
      {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Admin Login</h3>
      {message ? (
        <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p>
      ) : (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        
        {!skipCaptcha && <CaptchaWrapper onChange={handleCaptchaChange} />}
        
        {skipCaptcha && (
          <div className="dev-mode-notice">
            <p>CAPTCHA verification skipped (Development Mode)</p>
          </div>
        )}
        
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}
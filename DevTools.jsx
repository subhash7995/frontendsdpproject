import { useState, useEffect } from 'react';
import { shouldSkipCaptcha, setSkipCaptcha } from '../utils/captchaUtils';
import '../styles/dev-tools.css';

/**
 * Development Tools component 
 * Only shown in development mode
 */
const DevTools = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skipCaptcha, setSkipCaptchaState] = useState(false);
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  useEffect(() => {
    // Load initial state
    setSkipCaptchaState(shouldSkipCaptcha());
  }, []);
  
  if (!isDevelopment) return null;
  
  const toggleTools = () => {
    setIsOpen(!isOpen);
  };
  
  const handleToggleCaptcha = () => {
    const newState = !skipCaptcha;
    setSkipCaptchaState(newState);
    setSkipCaptcha(newState);
  };
  
  return (
    <div className="dev-tools">
      {!isOpen && (
        <button 
          className="dev-tools-toggle" 
          onClick={toggleTools}
          title="Development Tools"
        >
          🛠️
        </button>
      )}
      
      {isOpen && (
        <div className="dev-tools-panel">
          <div className="dev-tools-header">
            <h3>Development Tools</h3>
            <button className="dev-tools-close" onClick={toggleTools}>×</button>
          </div>
          
          <div className="dev-tools-content">
            <div className="dev-tools-section">
              <h4>CAPTCHA Settings</h4>
              
              <label className="dev-tools-toggle-label">
                <input 
                  type="checkbox" 
                  checked={skipCaptcha} 
                  onChange={handleToggleCaptcha}
                />
                Skip CAPTCHA verification
              </label>
              <p className="dev-tools-hint">
                When enabled, CAPTCHA verification will be skipped on all login pages.
                <strong>Note:</strong> This setting is for development only.
              </p>
            </div>
          </div>
          
          <div className="dev-tools-footer">
            <small>Development Mode</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevTools;
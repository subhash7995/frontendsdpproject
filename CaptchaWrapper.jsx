import SimpleCaptcha from './SimpleCaptcha';
import '../styles/simple-captcha.css';

/**
 * CaptchaWrapper - A component that provides a simple CAPTCHA verification
 * 
 * @param {Object} props
 * @param {function} props.onChange - Function called when captcha is verified with the result
 */
const CaptchaWrapper = ({ onChange }) => {
  return (
    <div className="captcha-wrapper">
      <SimpleCaptcha onChange={onChange} />
    </div>
  );
};

export default CaptchaWrapper; 
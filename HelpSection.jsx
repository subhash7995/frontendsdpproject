import ChatBotTrigger from './ChatBotTrigger';
import '../styles/help-section.css';

/**
 * HelpSection - A reusable section that can be added to any page to provide help via the chatbot
 * 
 * @param {Object} props
 * @param {string} props.title - Title for the help section
 * @param {string} props.description - Description text
 * @param {string} props.buttonText - Text to display on the ChatBotTrigger button
 * @param {string} props.icon - Icon to display on the button
 * @param {string} props.className - Additional CSS class names
 */
const HelpSection = ({
  title = "Need Help?",
  description = "Get instant answers to your questions with our virtual assistant.",
  buttonText = "Chat with us",
  icon = "💬",
  className = ""
}) => {
  return (
    <div className={`help-section ${className}`}>
      <div className="help-content">
        <h3 className="help-title">{title}</h3>
        <p className="help-description">{description}</p>
      </div>
      <ChatBotTrigger text={buttonText} icon={icon} />
    </div>
  );
};

export default HelpSection; 
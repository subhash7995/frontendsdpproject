import { useChatBot } from './ChatBotContext';
import '../styles/chatbot-trigger.css';

/**
 * ChatBotTrigger - A button component that can be placed anywhere to open the chatbot
 * 
 * @param {Object} props
 * @param {string} props.text - Text to display on the button
 * @param {string} props.icon - Icon to display (emoji or other character)
 * @param {string} props.className - Additional CSS class names
 * @param {Object} props.style - Additional inline styles
 */
const ChatBotTrigger = ({ 
  text = "Need help?", 
  icon = "❓", 
  className = "", 
  style = {} 
}) => {
  const { openChatBot } = useChatBot();

  return (
    <button 
      className={`chatbot-trigger ${className}`}
      style={style}
      onClick={openChatBot}
    >
      {icon && <span className="trigger-icon">{icon}</span>}
      {text}
    </button>
  );
};

export default ChatBotTrigger; 
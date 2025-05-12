import { useState, useRef, useEffect } from 'react';
import '../styles/chatbot.css';
import { useChatBot } from './ChatBotContext';
import { 
  WELCOME_MESSAGE,
  DEFAULT_RESPONSE,
  BOT_RESPONSES,
  RESPONSE_DELAY,
  AUTO_OPEN_ROUTES
} from './chatbotConfig';
import { useLocation } from 'react-router-dom';

const ChatBot = () => {
  const { isOpen, toggleChatBot, openChatBot } = useChatBot();
  const [messages, setMessages] = useState([
    { text: WELCOME_MESSAGE, sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const location = useLocation();
  
  // Auto-open on specified routes
  useEffect(() => {
    if (AUTO_OPEN_ROUTES.includes(location.pathname)) {
      setTimeout(() => openChatBot(), 2000); // Open after 2 seconds
    }
  }, [location.pathname, openChatBot]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    
    // Find bot response
    const userInput = input.toLowerCase();
    let botResponse = DEFAULT_RESPONSE;
    
    // Check for keywords in user input
    for (const [keyword, response] of Object.entries(BOT_RESPONSES)) {
      if (userInput.includes(keyword)) {
        botResponse = response;
        break;
      }
    }
    
    // Add bot response with a small delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, RESPONSE_DELAY);
    
    setInput('');
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={toggleChatBot}>
          <span className="chat-icon">💬</span>
        </button>
      )}
      
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Home Services Assistant</h3>
            <button className="close-btn" onClick={toggleChatBot}>×</button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="chatbot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 
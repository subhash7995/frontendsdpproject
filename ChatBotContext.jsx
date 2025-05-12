import { createContext, useContext, useState } from 'react';

const ChatBotContext = createContext();

export const ChatBotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openChatBot = () => setIsOpen(true);
  const closeChatBot = () => setIsOpen(false);
  const toggleChatBot = () => setIsOpen(prev => !prev);

  return (
    <ChatBotContext.Provider value={{ isOpen, openChatBot, closeChatBot, toggleChatBot }}>
      {children}
    </ChatBotContext.Provider>
  );
};

export const useChatBot = () => {
  const context = useContext(ChatBotContext);
  if (!context) {
    throw new Error('useChatBot must be used within a ChatBotProvider');
  }
  return context;
}; 
import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import CustomerNavBar from "./customer/CustomerNavBar";
import ManagerNavBar from "./manager/ManagerNavBar";
import { AuthProvider, useAuth } from "./contextapi/AuthContext";
import ChatBot from "./components/ChatBot";
import { ChatBotProvider } from "./components/ChatBotContext";
import DevTools from "./components/DevTools";

// This component handles the layout logic for role-based navbar
function AppContent() {
  const {
    isAdminLoggedIn,
    isCustomerLoggedIn,
    isManagerLoggedIn,
  } = useAuth();

  return (
    <div>
      {isAdminLoggedIn ? (
        <AdminNavBar />
      ) : isCustomerLoggedIn ? (
        <CustomerNavBar />
      ) : isManagerLoggedIn ? (
        <ManagerNavBar />
      ) : (
        <MainNavBar />
      )}
      <ChatBot />
      <DevTools />
    </div>
  );
}

// Main App component with AuthProvider context
function App() {
  return (
    <AuthProvider>
      <ChatBotProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ChatBotProvider>
    </AuthProvider>
  );
}

export default App;

import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Registration from './components/Registration';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import BloodRequest from './components/BloodRequest';
import { AlertCircle, Send } from 'react-feather'; // Importing icons

function App() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [messages, setMessages] = useState([]); 
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // ✅ Added missing state variables
  const [predefinedQuestions, setPredefinedQuestions] = useState([]);
  const [botResponses, setBotResponses] = useState({});

  const toggleChatbot = () => {
    setIsChatbotVisible(prevState => !prevState);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/questions');
        setPredefinedQuestions(response.data.questions); // ✅ Now properly defined
        setBotResponses(response.data.botResponses); // ✅ Now properly defined
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSendMessage = (selectedQuestion = null) => {
    const messageText = selectedQuestion || inputText;
    if (!messageText.trim()) return;

    // Add user message to the messages list
    const newUserMessage = {
      text: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const questionId = predefinedQuestions.find(q => q.text === messageText)?.id;
      const botResponse = botResponses[questionId] || "I'm here to help with blood donation questions. Please select one of the options above or ask a specific question.";
      
      const newBotMessage = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const router = createBrowserRouter([
    { path: "/", element: <><Navbar /><Home /></> },
    { path: "/Registration", element: <><Navbar /><Registration /></> },
    { path: "/Contact", element: <><Navbar /><Contact /></> },
    { path: "/BloodRequest", element: <><Navbar /><BloodRequest /></> },
    { path: "/Faq", element: <><Navbar /><FAQ /></> }
  ]);

  return (
    <div>
      <RouterProvider router={router} />

      {/* Button to toggle chatbot visibility */}
      <button
        className="btn chatbot-toggle-btn position-fixed bottom-10 right-4 z-1000"
        onClick={toggleChatbot}
        aria-label={isChatbotVisible ? 'Hide Chatbot' : 'Chat with Us'}
      >
        <img
          className="w-16 h-16 rounded-full md:w-20 md:h-20"
          src="https://img.freepik.com/free-vector/chatbot-conversation-vectorart_78370-4107.jpg?t=st=1730904772~exp=1730908372~hmac=fa44242f0791a005e89177e2d41aea3723d291292eca98fff2b03ea2e6414b8e&w=740"
          alt="Chatbot"
        />
      </button>

      {/* Conditionally render the dynamic chatbot */}
      {isChatbotVisible && (
        <div className="chatbot-container fixed bottom-28 right-4 z-50 w-full max-w-xs md:max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-red-600 text-white p-4 flex items-center">
            <AlertCircle className="mr-2" size={20} />
            <h3 className="font-semibold">Blood Donation Assistant</h3>
          </div>

          <div className="message-container overflow-scroll p-4 bg-gray-50 h-96 md:h-80">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-red-600 text-white rounded-br-none'
                      : 'bg-white border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-75 mt-1 block">{message.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center text-gray-500 text-sm">
                <div className="animate-pulse">Bot is typing...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 bg-gray-50 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-2 overflow-y">
              {predefinedQuestions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => handleSendMessage(question.text)}
                  className="bg-red-600 hover:bg-red-500 text-sm py-1 px-3 rounded-full border border-gray-200 transition-colors duration-200 text-white"
                >
                  {question.text}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-400"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

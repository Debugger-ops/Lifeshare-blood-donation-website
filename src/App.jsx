import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Registration from './components/Registration';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import { AlertCircle, Send } from 'react-feather'; // Importing icons

function App() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [messages, setMessages] = useState([]); 
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => {
    setIsChatbotVisible(prevState => !prevState);
  };

  useEffect(() => {
    if (messages.length) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const predefinedQuestions = [
    { id: 'centers', text: 'Find Donation Centers', category: 'Location' },
    { id: 'eligibility', text: 'Check Eligibility Criteria', category: 'Requirements' },
    { id: 'process', text: 'How to Donate Blood', category: 'Process' },
    { id: 'drives', text: 'Upcoming Blood Drives', category: 'Events' },
    { id: 'pain', text: 'Does donating blood hurt?', category: 'Health' },
    { id: 'medication', text: 'Can I donate if I\'m on medication?', category: 'Health' },
    { id: 'tattoo', text: 'Can I donate with a tattoo?', category: 'Requirements' }
  ];

  const botResponses = {
    centers: "The nearest donation centers are:\n• City Hospital Blood Bank (2.5 miles)\n• Regional Blood Center (4.1 miles)\n• Community Donor Center (5.3 miles)",
    eligibility: "Eligibility criteria: Age 18-65, Weight >50kg, Hemoglobin ≥12.5g/dL, No active infections.",
    process: "Donation Process: 1. Registration (5 mins), 2. Health Screening (10 mins), 3. Blood Donation (10-15 mins), 4. Refreshments (15 mins)",
    drives: "Upcoming Blood Drives: Nov 15: Central Mall (9AM-5PM), Nov 18: University Campus (10AM-4PM), Nov 20: Community Center (8AM-3PM)",
    pain: "Most donors report minimal discomfort. The actual donation process is usually painless.",
    medication: "You may still be able to donate depending on your medication. Contact us for more details.",
    tattoo: "Wait 3 months after getting the tattoo to donate blood if it was applied by a licensed facility."
  };

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
    { path: "/About", element: <><Navbar /><AboutUs /></> },
    { path: "/Faq", element: <><Navbar /><FAQ /></> }
  ]);

  return (
    <div>
      <RouterProvider router={router} />

      {/* Button to toggle chatbot visibility */}
      <button
        className="btn chatbot-toggle-btn position-fixed bottom-4 right-4"
        onClick={toggleChatbot}
        aria-label={isChatbotVisible ? 'Hide Chatbot' : 'Chat with Us'}
      >
        <img
          className="w-20 h-20 rounded-full"
          src="https://img.freepik.com/free-vector/chatbot-conversation-vectorart_78370-4107.jpg?t=st=1730904772~exp=1730908372~hmac=fa44242f0791a005e89177e2d41aea3723d291292eca98fff2b03ea2e6414b8e&w=740"
          alt="Chatbot"
        />
        <i className={`fa ${isChatbotVisible ? 'fa-times' : 'fa-comment'}`}></i>
      </button>

      {/* Conditionally render the dynamic chatbot */}
      {isChatbotVisible && (
        <div className="m-4 my-24 py- p w-96 h-3/4 position-fixed bottom-12 right-4 overflow-scroll z-50">
          <div className="bg-red-600 text-white p-4 flex items-center position-fixed w-96 z-50">
            <AlertCircle className="mr-2" size={20} />
            <h3 className="font-semibold">Blood Donation Assistant</h3>
          </div>
          <div className=" overflow-y-auto p-4 bg-gray-50 my-">
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
                  <span className="text-xs opacity-75 mt-1 block">
                    {message.timestamp}
                  </span>
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
          <div className=" px-4 bg-gray-50 border-t border-gray-200 w-full " >
            <div className="flex flex-wrap gap-2 w-full h-60 overflow-scroll ">
              {predefinedQuestions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => handleSendMessage(question.text)}
                  className="bg-white hover:bg-gray-50 text-gray-700 text-sm py-1 px-3 rounded-full border border-gray-200 transition-colors duration-200"
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

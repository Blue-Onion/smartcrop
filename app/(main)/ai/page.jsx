"use client";

import ChatPage from "./_components/chatPlace";

const AIChatPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-3xl mx-auto">
        {/* Compact Header */}
        <div className="text-center py-4 mb-4">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Farm AI Assistant
            </h1>
          </div>
          <p className="text-sm text-gray-600">
            Ask about crops, diseases, or farming practices
          </p>
        </div>

        {/* Chat Component */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <ChatPage />
        </div>

        {/* Subtle Tips */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Try: "wheat diseases" • "planting tips" • "soil health"
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIChatPage;
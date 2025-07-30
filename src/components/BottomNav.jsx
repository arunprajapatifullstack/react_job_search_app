import React from 'react';
import { Briefcase, MessageSquare, User, Home } from 'lucide-react';

const BottomNav = ({ 
  onNavigateToHome, 
  onNavigateToJobs, 
  onNavigateToMessages, 
  onNavigateToProfile,
  activeTab = 'home' // Default to 'home' as active
}) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-[#2a2a4a] rounded-t-3xl p-4 z-50">
      <div className="flex justify-around items-center text-white">
        <button 
          onClick={onNavigateToHome}
          className={`p-2 rounded-xl transition-all duration-200 ${
            activeTab === 'home' 
              ? 'bg-[#7c7ce8] text-white shadow-lg' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Home className="w-6 h-6" />
        </button>
        
        <button 
          onClick={onNavigateToJobs}
          className={`p-2 rounded-xl transition-all duration-200 ${
            activeTab === 'jobs' 
              ? 'bg-[#7c7ce8] text-white shadow-lg' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Briefcase className="w-6 h-6" />
        </button>
        
        <button 
          onClick={onNavigateToMessages}
          className={`p-2 rounded-xl transition-all duration-200 ${
            activeTab === 'messages' 
              ? 'bg-[#7c7ce8] text-white shadow-lg' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <MessageSquare className="w-6 h-6" />
        </button>
        
        <button 
          onClick={onNavigateToProfile}
          className={`p-2 rounded-xl transition-all duration-200 ${
            activeTab === 'profile' 
              ? 'bg-[#7c7ce8] text-white shadow-lg' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <User className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
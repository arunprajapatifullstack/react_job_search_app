import React, { useState } from 'react';
import { Settings, Edit, Plus, MapPin, Phone, Mail, Briefcase, GraduationCap } from 'lucide-react';
import { Bell, Menu, Filter, Search, Bookmark, HousePlus , Star, MessageSquare, User } from 'lucide-react';
import BottomNav from '../components/BottomNav'; // adjust the path if needed


const Profile = ({ onNavigateBack, onNavigateToHome, onNavigateToJobs, onNavigateToMessages, onNavigateToProfile }) => {

  return (
    <div className="min-h-screen bg-[#16213e] text-white max-w-sm mx-auto pb-20">
      {/* Status Bar */}
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={onNavigateBack}
          className="p-2 -ml-2"
        >
          <span className="text-white text-xl">←</span>
        </button>
        <h1 className="text-lg font-semibold">Profile</h1>
        <Settings className="w-6 h-6 text-white" />
      </div>

      {/* Progress Bar */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="bg-gray-600 h-2 rounded-full flex-1 relative">
            <div className="bg-[#6366f1] h-2 rounded-full w-[90%]"></div>
          </div>
          <span className="text-sm ml-3 text-white">9/10</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mx-4 mb-4">
        <div className="bg-[#2a2a4a] rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-[#6366f1]" />
              <h2 className="text-lg font-semibold text-white">Contact Info</h2>
            </div>
            <Edit className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-3 text-gray-400" />
              <span className="text-gray-300">New York, United States</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-gray-400" />
              <span className="text-gray-300">(208) 555-0112</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-gray-400" />
              <span className="text-gray-300">example@mail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="mx-4 mb-4">
        <div className="bg-[#2a2a4a] rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-5 h-5 mr-2 text-[#6366f1]">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-white">About Me</h2>
            </div>
            <Edit className="w-5 h-5 text-gray-400" />
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat aliquam egestas
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mx-4 mb-4">
        <div className="bg-[#2a2a4a] rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-[#6366f1]" />
              <h2 className="text-lg font-semibold text-white">Experience</h2>
            </div>
            <Plus className="w-5 h-5 text-[#6366f1]" />
          </div>
          
          <div className="flex items-start">
            <div className="bg-[#6366f1] rounded-lg p-2 mr-3 mt-1">
              <div className="w-6 h-6 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Frontend Designer</h3>
              <p className="text-gray-400 text-sm">Info Corp | New York</p>
              <p className="text-gray-400 text-sm">Dec 2020 - Present</p>
            </div>
            <Edit className="w-4 h-4 text-gray-400 mt-1" />
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mx-4 mb-6">
        <div className="bg-[#2a2a4a] rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-[#6366f1]" />
              <h2 className="text-lg font-semibold text-white">Education</h2>
            </div>
            <Plus className="w-5 h-5 text-[#6366f1]" />
          </div>
          
          <div className="flex items-start">
            <div className="bg-[#6366f1] rounded-lg p-2 mr-3 mt-1">
              <div className="w-6 h-6 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Computer Engineer</h3>
              <p className="text-gray-400 text-sm">University Name</p>
              <p className="text-gray-400 text-sm">2018 - 2022</p>
            </div>
            <Edit className="w-4 h-4 text-gray-400 mt-1" />
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Using the BottomNav component */}
      <BottomNav
        onNavigateToHome={onNavigateToHome}
        onNavigateToJobs={onNavigateToJobs}
        onNavigateToMessages={onNavigateToMessages}
        onNavigateToProfile={onNavigateToProfile}
        activeTab="profile"
      />
    </div>
  );
};

export default Profile;
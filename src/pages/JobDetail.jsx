import React, { useState } from 'react';
import { Bell, Menu, Filter, Search, Bookmark, HousePlus , Star, Briefcase, MessageSquare, User } from 'lucide-react';
import BottomNav from '../components/BottomNav'; // adjust the path if needed



const JobDetail = ({ jobId, onNavigateBack }) => {
  const [activeTab, setActiveTab] = useState('details');

  // Job data based on jobId
  const jobs = {
    1: {
      id: 1,
      title: 'Frontend Designer',
      company: 'Info Corp',
      location: 'New York',
      salary: '50k - 70k',
      level: 'Senior',
      type: 'Full Time',
      remote: false,
      icon: '💻',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris',
      responsibilities: [
        'Lorem ipsum dolor sit amet',
        'Nunc maximus, nulla ut commodo sagittis',
        'Vivamus feugiat elit lorem eu porttitor',
        'Suspendisse lorem felis pretium maximus'
      ]
    },
    2: {
      id: 2,
      title: 'Python Developer',
      company: 'Code INC',
      location: 'Germany',
      salary: '80k-90k',
      level: 'Senior',
      type: 'Full Time',
      remote: true,
      icon: '🐍',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris',
      responsibilities: [
        'Lorem ipsum dolor sit amet',
        'Nunc maximus, nulla ut commodo sagittis',
        'Vivamus feugiat elit lorem eu porttitor',
        'Suspendisse lorem felis pretium maximus'
      ]
    },
    3: {
      id: 3,
      title: 'Product Engineer',
      company: 'Cube Tech',
      location: 'UK',
      salary: '60k-80k',
      level: 'Senior',
      type: 'Part Time',
      remote: true,
      icon: '📦',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris',
      responsibilities: [
        'Lorem ipsum dolor sit amet',
        'Nunc maximus, nulla ut commodo sagittis',
        'Vivamus feugiat elit lorem eu porttitor',
        'Suspendisse lorem felis pretium maximus'
      ]
    }
  };

  const job = jobs[jobId] || jobs[2]; // Default to Python Developer

  const handleBack = () => {
    onNavigateBack();
  };

  const handleShare = () => {
    console.log('Share job');
  };

  const handleApply = () => {
    console.log('Apply to job');
  };

  return (
    <div className="min-h-screen bg-[#16213e] text-white max-w-sm mx-auto">
      {/* Status Bar */}
      

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={handleBack}
          className="p-2 -ml-2"
        >
          <span className="text-white text-xl">←</span>
        </button>
        <h1 className="text-lg font-semibold">Job Description</h1>
        <button onClick={handleShare} className="p-2">
          <span className="text-white text-xl">🔗</span>
        </button>
      </div>

      {/* Job Header */}
      <div className="px-4 mb-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#7c7ce8] rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
            {job.icon}
          </div>
          <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
          <p className="text-gray-400 mb-2">
            <span className="font-medium">{job.company}</span> | {job.location}
          </p>
          <p className="text-xl font-bold text-white">{job.salary}</p>
        </div>
      </div>

      {/* Job Tags */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-center gap-3">
          <span className="bg-[#2a2a4a] text-gray-300 px-4 py-2 rounded-full text-sm">
            {job.level}
          </span>
          <span className="bg-[#2a2a4a] text-gray-300 px-4 py-2 rounded-full text-sm">
            {job.type}
          </span>
          {job.remote && (
            <span className="bg-[#2a2a4a] text-gray-300 px-4 py-2 rounded-full text-sm">
              Remote
            </span>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-4 mb-6">
        <div className="flex bg-[#2a2a4a] rounded-xl p-1">
          <button
            onClick={() => setActiveTab('details')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'details'
                ? 'bg-[#7c7ce8] text-white'
                : 'text-gray-400'
            }`}
          >
            Job Details
          </button>
          <button
            onClick={() => setActiveTab('company')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'company'
                ? 'bg-[#7c7ce8] text-white'
                : 'text-gray-400'
            }`}
          >
            About Company
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 mb-20">
        {activeTab === 'details' && (
          <div>
            {/* Job Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Job Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'company' && (
          <div>
            <h3 className="text-lg font-semibold mb-3">About {job.company}</h3>
            <p className="text-gray-300 leading-relaxed">
              {job.company} is a leading technology company focused on innovative solutions.
              We are committed to creating cutting-edge products that make a difference in people's lives.
              Our team consists of passionate developers and designers who work together to build
              amazing products that solve real-world problems.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <span>🏢</span>
                <span>Founded: 2010</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span>👥</span>
                <span>Team Size: 50-100</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span>🌍</span>
                <span>Remote-first company</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Apply Button */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-[#16213e] p-4 border-t border-[#2a2a4a]">
        <button
          onClick={handleApply}
          className="w-full bg-[#7c7ce8] hover:bg-[#6b6bdb] text-white font-semibold py-4 rounded-2xl transition-colors"
        >
          Apply Now
        </button>
      </div>

    </div>

    
  );
};

export default JobDetail;
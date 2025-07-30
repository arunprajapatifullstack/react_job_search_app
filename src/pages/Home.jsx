import React, { useState } from 'react';
import { Bell, Menu, Filter, Search, Bookmark } from 'lucide-react';
import BottomNav from '../components/BottomNav'; // adjust the path if needed

const Home = ({
  onNavigateToJob = () => {},
  onNavigateToProfile = () => {},
  onNavigateToHome = () => {},
  onNavigateToJobs = () => {},
  onNavigateToMessages = () => {}
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const suggestedJobs = [
    {
      id: 1,
      title: 'Frontend Designer',
      company: 'Info Corp',
      location: 'New York',
      level: 'Senior',
      type: 'Full Time',
      salary: '50k - 70k',
      time: '10 hours ago',
      icon: '💻',
      saved: false,
    },
  ];

  const recommendedJobs = [
    {
      id: 2,
      title: 'Python Developer',
      company: 'Code INC',
      location: 'Germany',
      level: 'Senior',
      type: 'Full Time',
      salary: '80k-90k',
      time: '2 days ago',
      icon: '🐍',
      remote: true,
      saved: true,
    },
    {
      id: 3,
      title: 'Product Engineer',
      company: 'Cube Tech',
      location: 'UK',
      level: 'Senior',
      type: 'Part Time',
      salary: '',
      time: '',
      icon: '📦',
      remote: true,
      saved: true,
    },
  ];

  const allJobs = suggestedJobs.concat(recommendedJobs);

  const filteredJobs = searchQuery
    ? allJobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allJobs;

  const JobCard = ({ job }) => (
    <div
      onClick={() => onNavigateToJob(job.id)}
      className="bg-[#3a3a5c] text-white rounded-xl p-4 mb-4 cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-[#7c7ce8] rounded-xl flex items-center justify-center text-xl">
            {job.icon}
          </div>
          <div>
            <h3 className="font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-300">
              {job.company} | {job.location}
            </p>
          </div>
        </div>
        <Bookmark className="w-5 h-5 text-gray-300" />
      </div>
      <div className="flex gap-2 mt-3 text-xs text-gray-300">
        <span className="bg-[#4a4a70] px-2 py-1 rounded">{job.level}</span>
        <span className="bg-[#4a4a70] px-2 py-1 rounded">{job.type}</span>
      </div>
      <div className="mt-3 flex justify-between text-sm">
        <span className="font-bold text-white">{job.salary}</span>
        <span className="text-gray-400">{job.time}</span>
      </div>
    </div>
  );

  return (
    <div className="relative bg-[#16213e] min-h-screen text-white p-4 max-w-sm mx-auto pb-32">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Menu className="text-white" />
        <div className="flex items-center gap-3">
          <Bell className="text-white" />
          <button
            className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 overflow-hidden"
            onClick={onNavigateToProfile}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Let's Find Job</h1>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          className="w-full bg-[#2a2a4a] text-white pl-10 pr-10 py-3 rounded-xl placeholder-gray-400"
          placeholder="Search job"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Filtered or All Jobs */}
      <div>
        <h2 className="text-lg font-semibold mb-3">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Job Recommendations'}
        </h2>

        {filteredJobs.length === 0 ? (
          <p className="text-gray-400">No matching jobs found.</p>
        ) : (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav
        onNavigateToHome={onNavigateToHome}
        onNavigateToJobs={onNavigateToJobs}
        onNavigateToMessages={onNavigateToMessages}
        onNavigateToProfile={onNavigateToProfile}
      />
    </div>
  );
};

export default Home;

// src/main.jsx
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import JobDetail from './pages/JobDetail';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleNavigateToHome = () => {
    setCurrentPage('home');
  };

  const handleNavigateToProfile = () => {
    setCurrentPage('profile');
  };

  const handleNavigateToJob = (jobId) => {
    setSelectedJobId(jobId);
    setCurrentPage('jobDetail');
  };

  const handleNavigateToJobs = () => {
    alert('Jobs screen not implemented yet');
  };

  const handleNavigateToMessages = () => {
    alert('Messages screen not implemented yet');
  };

  return (
    <>
      {currentPage === 'home' && (
        <Home
          onNavigateToJob={handleNavigateToJob}
          onNavigateToProfile={handleNavigateToProfile}
        />
      )}

      {currentPage === 'profile' && (
        <Profile
          onNavigateBack={handleNavigateToHome}
          onNavigateToHome={handleNavigateToHome}
          onNavigateToJobs={handleNavigateToJobs}
          onNavigateToMessages={handleNavigateToMessages}
          onNavigateToProfile={handleNavigateToProfile}
        />
      )}

      {currentPage === 'jobDetail' && (
        <JobDetail
          jobId={selectedJobId}
          onNavigateBack={handleNavigateToHome}
        />
      )}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

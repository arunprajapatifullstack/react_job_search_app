// import React, { useState } from 'react';
// import Home from './pages/Home';
// import JobDetail from './pages/JobDetail';
// import Profile from './pages/Profile';

// const App = () => {
//   const [currentView, setCurrentView] = useState('home');
//   const [selectedJobId, setSelectedJobId] = useState(null);

//   const handleNavigateToJob = (jobId) => {
//     setSelectedJobId(jobId);
//     setCurrentView('jobDetail');
//   };

//   const renderScreen = () => {
//     switch (currentView) {
//       case 'home':
//         return (
//           <Home
//             onNavigateToJob={handleNavigateToJob}
//             onNavigateToProfile={() => setCurrentView('profile')}
//           />
//         );
//       case 'jobDetail':
//         return (
//           <JobDetail
//             jobId={selectedJobId}
//             onNavigateBack={() => setCurrentView('home')}
//           />
//         );
//       case 'profile':
//         return (
//           <Profile
//             onNavigateBack={() => setCurrentView('home')}
//             onNavigateToHome={() => setCurrentView('home')}
//             onNavigateToJobs={() => setCurrentView('home')}
//             onNavigateToMessages={() => setCurrentView('home')}
//             onNavigateToProfile={() => setCurrentView('profile')}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return <div>{renderScreen()}</div>;
// };

// export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../components/navigation/MainNavbar';
import Footer from '../components/navigation/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <MainNavbar />
      <main className="flex-grow pt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
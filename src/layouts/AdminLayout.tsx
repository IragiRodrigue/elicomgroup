import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, Building as Buildings, LayoutList, Users, Settings, LogOut, ChevronLeft, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const AdminLayout: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: t('admin.dashboard'), path: '/admin' },
    { icon: <Buildings size={20} />, label: t('admin.companies'), path: '/admin/companies' },
    { icon: <LayoutList size={20} />, label: t('admin.sections'), path: '/admin/sections' },
    { icon: <Users size={20} />, label: t('admin.users'), path: '/admin/users' },
    { icon: <Settings size={20} />, label: t('admin.settings'), path: '/admin/settings' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar for desktop */}
      <aside 
        className={twMerge(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:h-screen",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <Link to="/admin" className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {t('common.admin')}
              </span>
            </Link>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:block p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ChevronLeft size={20} className={`transition-transform duration-300 ${!sidebarOpen && 'rotate-180'}`} />
            </button>
            <button 
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={twMerge(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                <span className="mr-3">{item.icon}</span>
                {(sidebarOpen || mobileSidebarOpen) && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={toggleLanguage}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Globe size={20} className="mr-3" />
                {(sidebarOpen || mobileSidebarOpen) && (
                  <span>{i18n.language === 'fr' ? 'Français' : 'English'}</span>
                )}
              </button>

              <button 
                onClick={toggleTheme}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="mr-3" />
                ) : (
                  <Moon size={20} className="mr-3" />
                )}
                {(sidebarOpen || mobileSidebarOpen) && (
                  <span>{theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}</span>
                )}
              </button>

              <button 
                onClick={handleLogout}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut size={20} className="mr-3" />
                {(sidebarOpen || mobileSidebarOpen) && <span>{t('common.logout')}</span>}
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button 
                onClick={() => setMobileSidebarOpen(true)}
                className="lg:hidden p-2 mr-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700"
              >
                <Menu size={20} />
              </button>
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                {location.pathname === '/admin' && t('admin.dashboard')}
                {location.pathname.startsWith('/admin/companies') && t('admin.companies')}
                {location.pathname.startsWith('/admin/sections') && t('admin.sections')}
                {location.pathname.startsWith('/admin/users') && t('admin.users')}
                {location.pathname.startsWith('/admin/settings') && t('admin.settings')}
              </h1>
            </div>
            <div className="flex items-center">
              <Link 
                to="/"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                {t('nav.home')}
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
          {mobileSidebarOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black lg:hidden"
            />
          )}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
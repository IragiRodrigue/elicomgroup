import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Users, LayoutList, Eye, Clock, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data
const mockStats = {
  companies: 4,
  sections: 12,
  users: 8,
  pageViews: 2450,
  lastUpdate: new Date().toISOString(),
};

const AdminDashboard: React.FC = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState(mockStats);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t('admin.dashboard')}
        </h2>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <Clock size={14} className="mr-1" />
          <span>
            {t('common.lastUpdated')}: {new Date(stats.lastUpdate).toLocaleString()}
          </span>
        </div>
      </div>
      
      {/* Stats Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center"
        >
          <div className="rounded-full p-3 bg-blue-100 dark:bg-blue-900 mr-4">
            <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t('admin.companies')}</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.companies}</h3>
          </div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center"
        >
          <div className="rounded-full p-3 bg-green-100 dark:bg-green-900 mr-4">
            <LayoutList className="h-6 w-6 text-green-600 dark:text-green-300" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t('admin.sections')}</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.sections}</h3>
          </div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center"
        >
          <div className="rounded-full p-3 bg-purple-100 dark:bg-purple-900 mr-4">
            <Users className="h-6 w-6 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t('admin.users')}</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.users}</h3>
          </div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center"
        >
          <div className="rounded-full p-3 bg-amber-100 dark:bg-amber-900 mr-4">
            <Eye className="h-6 w-6 text-amber-600 dark:text-amber-300" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t('admin.pageViews')}</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.pageViews}</h3>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Chart and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 lg:col-span-2"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('admin.visitorStats')}
            </h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                {t('common.week')}
              </button>
              <button className="px-3 py-1 text-xs bg-primary text-white rounded-md">
                {t('common.month')}
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                {t('common.year')}
              </button>
            </div>
          </div>
          
          <div className="h-64 flex items-center justify-center">
            <BarChart3 size={48} className="text-gray-300 dark:text-gray-600" />
            <p className="ml-4 text-gray-500 dark:text-gray-400">
              {t('admin.chartPlaceholder')}
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            {t('admin.recentActivity')}
          </h3>
          
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start">
                <div className="rounded-full h-8 w-8 bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    {['JD', 'MM', 'PR', 'SD'][i - 1]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {['Jean Dupont', 'Marie Martin', 'Paul Robert', 'Sophie Dubois'][i - 1]}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {[
                      'A modifié la section "À propos"',
                      'A ajouté un nouveau service',
                      'A mis à jour les coordonnées',
                      'A publié une nouvelle actualité'
                    ][i - 1]}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {`Il y a ${i} heure${i > 1 ? 's' : ''}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
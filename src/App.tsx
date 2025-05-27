import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Toaster } from 'sonner';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import CompanyList from './pages/admin/CompanyList';
import CompanyEdit from './pages/admin/CompanyEdit';
import SectionList from './pages/admin/SectionList';
import SectionEdit from './pages/admin/SectionEdit';
import UserList from './pages/admin/UserList';
import UserEdit from './pages/admin/UserEdit';
import LoginPage from './pages/auth/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <DndProvider backend={HTML5Backend}>
          <Router>
            <Toaster position="top-right" richColors />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="company/:slug" element={<CompanyPage />} />
              </Route>
              
              {/* Auth Routes */}
              <Route path="/login" element={<LoginPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="companies">
                  <Route index element={<CompanyList />} />
                  <Route path="new" element={<CompanyEdit />} />
                  <Route path=":id" element={<CompanyEdit />} />
                </Route>
                <Route path="sections">
                  <Route index element={<SectionList />} />
                  <Route path="new" element={<SectionEdit />} />
                  <Route path=":id" element={<SectionEdit />} />
                </Route>
                <Route path="users">
                  <Route index element={<UserList />} />
                  <Route path="new" element={<UserEdit />} />
                  <Route path=":id" element={<UserEdit />} />
                </Route>
              </Route>
              
              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </DndProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
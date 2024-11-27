import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="menu" element={<div className="p-4">Menu Management Coming Soon</div>} />
          <Route path="kitchen" element={<div className="p-4">Kitchen Display Coming Soon</div>} />
          <Route path="reservations" element={<div className="p-4">Reservations Coming Soon</div>} />
          <Route path="orders" element={<div className="p-4">Orders History Coming Soon</div>} />
          <Route path="staff" element={<div className="p-4">Staff Management Coming Soon</div>} />
          <Route path="reports" element={<div className="p-4">Reports Coming Soon</div>} />
          <Route path="settings" element={<div className="p-4">Settings Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
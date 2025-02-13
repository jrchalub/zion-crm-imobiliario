import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LeadsPage from './components/LeadsPage';
import SellersPage from './components/SellersPage';
import ReportsPage from './components/ReportsPage';
import PropertiesPage from './components/PropertiesPage';
import ClientsPage from './components/ClientsPage';
import KanbanPage from './components/KanbanPage';
import SalesPage from './components/SalesPage';
import ClientPortfolioPage from './components/ClientPortfolioPage';
import AttendancePage from './components/AttendancePage';
import EmailCampaignsPage from './components/EmailCampaignsPage';
import IntegrationsPage from './components/IntegrationsPage';
import FlowBuilderPage from './components/FlowBuilderPage';
import ConnectionsPage from './components/ConnectionsPage';
import UsersPage from './components/UsersPage'; // Import UsersPage
import './index.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard'); // ..., 'users'

  const handleNavigation = (page) => {
    setActivePage(page);
  };

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Estado para controlar o Sidebar

  const handleToggleSidebar = () => { // Função para passar para o Sidebar
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

  return (
    <div className="dashboard-container">
      <Sidebar onNavigate={handleNavigation} activePage={activePage} isSidebarCollapsed={isSidebarCollapsed} onToggleSidebar={handleToggleSidebar}  />
      <div className={`content-area ${isSidebarCollapsed ? 'expanded' : ''}`}>
        {activePage === 'dashboard' ? <Dashboard isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'leads' ? <LeadsPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'kanban' ? <KanbanPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'attendance' ? <AttendancePage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'client-portfolio' ? <ClientPortfolioPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'sellers' ? <SellersPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'properties' ? <PropertiesPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'clients' ? <ClientsPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'reports' ? <ReportsPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'sales' ? <SalesPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'email-campaigns' ? <EmailCampaignsPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'integrations' ? <IntegrationsPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'flow-builder' ? <FlowBuilderPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'connections' ? <ConnectionsPage isSidebarCollapsed={isSidebarCollapsed} /> :
         activePage === 'users' ? <UsersPage isSidebarCollapsed={isSidebarCollapsed} /> :  // Render UsersPage
         <Dashboard isSidebarCollapsed={isSidebarCollapsed} />}
      </div>
    </div>
  );
}

export default App;

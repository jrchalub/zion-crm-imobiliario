import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ onNavigate, activePage, isSidebarCollapsed, onToggleSidebar }) {
    //const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Removido

  //const toggleSidebar = () => { // Removido
  //  setIsSidebarCollapsed(!isSidebarCollapsed);
  //};

  return (
    <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="logo">
        {isSidebarCollapsed ? 'CRM' : 'CRM Imobiliária'}
      </div>
      <button className="toggle-button" onClick={onToggleSidebar}>
        {isSidebarCollapsed ? '>>' : '<<'}
      </button>
      <ul className="menu">
        <li className={`menu-item ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => onNavigate('dashboard')}>
          <a href="#">
            <span className="menu-icon">🏠</span>
            {!isSidebarCollapsed && 'Dashboard'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'leads' ? 'active' : ''}`} onClick={() => onNavigate('leads')}>
          <a href="#">
            <span className="menu-icon">👤</span>
            {!isSidebarCollapsed && 'Leads'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'kanban' ? 'active' : ''}`} onClick={() => onNavigate('kanban')}>
          <a href="#">
            <span className="menu-icon">📊</span>
            {!isSidebarCollapsed && 'Kanban'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'attendance' ? 'active' : ''}`} onClick={() => onNavigate('attendance')}>
          <a href="#">
            <span className="menu-icon">💬</span>
            {!isSidebarCollapsed && 'Atendimentos'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'client-portfolio' ? 'active' : ''}`} onClick={() => onNavigate('client-portfolio')}>
          <a href="#">
            <span className="menu-icon">💼</span>
            {!isSidebarCollapsed && 'Carteira de Clientes'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'sellers' ? 'active' : ''}`} onClick={() => onNavigate('sellers')}>
          <a href="#">
            <span className="menu-icon">👥</span>
            {!isSidebarCollapsed && 'Vendedores'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'properties' ? 'active' : ''}`} onClick={() => onNavigate('properties')}>
          <a href="#">
            <span className="menu-icon">🏠</span>
            {!isSidebarCollapsed && 'Imóveis'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'clients' ? 'active' : ''}`} onClick={() => onNavigate('clients')}>
          <a href="#">
            <span className="menu-icon">🧑‍🤝‍🧑</span>
            {!isSidebarCollapsed && 'Clientes'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'reports' ? 'active' : ''}`} onClick={() => onNavigate('reports')}>
          <a href="#">
            <span className="menu-icon">📈</span>
            {!isSidebarCollapsed && 'Relatórios'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'sales' ? 'active' : ''}`} onClick={() => onNavigate('sales')}>
          <a href="#">
            <span className="menu-icon">💰</span>
            {!isSidebarCollapsed && 'Vendas'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'email-campaigns' ? 'active' : ''}`} onClick={() => onNavigate('email-campaigns')}>
          <a href="#">
            <span className="menu-icon">📧</span>
            {!isSidebarCollapsed && 'Disparo de E-mails'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'integrations' ? 'active' : ''}`} onClick={() => onNavigate('integrations')}>
          <a href="#">
            <span className="menu-icon">🔗</span>
            {!isSidebarCollapsed && 'Integrações'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'flow-builder' ? 'active' : ''}`} onClick={() => onNavigate('flow-builder')}>
          <a href="#">
            <span className="menu-icon">⚙️</span>
            {!isSidebarCollapsed && 'Flow Builder'}
          </a>
        </li>
        <li className={`menu-item ${activePage === 'connections' ? 'active' : ''}`} onClick={() => onNavigate('connections')}>
          <a href="#">
            <span className="menu-icon">🔌</span>
            {!isSidebarCollapsed && 'Conexões'}
          </a>
        </li>
          <li className={`menu-item ${activePage === 'users' ? 'active' : ''}`} onClick={() => onNavigate('users')}>
          <a href="#">
            <span className="menu-icon">👤</span>
            {!isSidebarCollapsed && 'Usuários'}
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <span className="menu-icon">⚙️</span>
            {!isSidebarCollapsed && 'Configurações'}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

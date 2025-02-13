import React from 'react';
import SaleForm from './SaleForm'; // Import SaleForm
import './SalesPage.css';

function SalesPage() {
  return (
    <div className="sales-page-content">
      <h2>Gestão de Vendas</h2>
      <p>Registre novas vendas e acompanhe o desempenho da equipe.</p>

      <div className="sales-section">
        <h3>Registro de Vendas</h3>
        <SaleForm /> {/* Include SaleForm */}
      </div>

      <div className="sales-report-section">
        <h3>Relatórios de Vendas</h3>
        {/* Relatórios e dashboards de vendas serão adicionados aqui */}
        <p>Em breve: Relatórios e dashboards para análise de vendas.</p>
      </div>
    </div>
  );
}

export default SalesPage;

import React from 'react';
import './ReportsPage.css';

function ReportsPage() {
  return (
    <div className="reports-page-content">
      <h2>Relatórios de Performance de Vendedores</h2>
      <p>Visualize o desempenho dos seus corretores e vendedores.</p>

      <div className="reports-container">
        <div className="report-section">
          <h3>Performance Geral dos Corretores</h3>
          {/* Tabela ou gráficos de performance geral serão adicionados aqui */}
          <p>Em breve: Relatório detalhado com número de vendas, tempo médio de conversão e faturamento por corretor.</p>
        </div>

        {/* Outras seções de relatórios podem ser adicionadas aqui */}
      </div>
    </div>
  );
}

export default ReportsPage;

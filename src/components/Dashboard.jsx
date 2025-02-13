import React from 'react';
import './Dashboard.css';

function Dashboard({ isSidebarCollapsed }) { // Recebe isSidebarCollapsed como prop
  // Dados mockados (como antes)
  const dashboardData = [
    { title: 'LEADS EM NEGOCIAÇÃO', value: 72, percentageChange: '12%', percentageType: 'up', description: 'Comparado ao mês passado', color: '#4c6ef5', icon: 'negotiation' },
    { title: 'IMÓVEIS AGUARDANDO APROVAÇÃO', value: 15, percentageChange: '-3%', percentageType: 'down', description: 'Variação semanal', color: '#fd7e14', icon: 'pending-properties' },
    { title: 'IMÓVEIS VENDIDOS ESTE MÊS', value: 28, percentageChange: '25%', percentageType: 'up', description: 'Meta mensal alcançada', color: '#19ce60', icon: 'sold-properties' },
    { title: 'CORRETORES ONLINE', value: '12/20', description: 'Corretores ativos agora', color: '#862ee0', icon: 'active-sellers' },
    { title: 'NOVAS VISITAS AGENDADAS', value: 145, description: 'Agendamentos para esta semana', color: '#f73164', icon: 'scheduled-visits' },
    { title: 'TEMPO MÉDIO PARA VENDA', value: '54 dias', description: 'Média de tempo de conversão', color: '#6610f2', icon: 'avg-sale-time' },
    { title: 'IMÓVEIS MAIS VENDIDOS', value: 'Casa no Lago, Apartamento Centro...', description: 'Top 3 deste mês', color: '#05c9bb', icon: 'top-sold' },
    { title: 'IMÓVEIS MAIS PROCURADOS', value: 'Cobertura Vista Mar, Casa de Campo...', description: 'Top 3 em buscas', color: '#ffc82c', icon: 'top-searched' },
    { title: 'ANÁLISE DE ROI POR CANAL DE LEADS', value: [{ channel: 'Google Ads', roi: '150%' }, { channel: 'Redes Sociais', roi: '120%' }, { channel: 'Indicação', roi: '200%' },], description: 'Retorno sobre investimento por canal', color: '#e74c3c', icon: 'roi-analysis', },
    { title: 'TAXA DE CONVERSÃO DE LEADS', value: '2.5%', description: 'Leads convertidos em clientes', color: '#3498db', icon: 'lead-conversion-rate', },
  ];

  const topSellers = [
    { name: 'Maria Vendedora', sales: 35 },
    { name: 'João Corretor', sales: 30 },
    { name: 'Carla Imóveis', sales: 28 },
    { name: 'Pedro Silva', sales: 25 },
    { name: 'Ana Rodrigues', sales: 22 },
  ];

  return (
    <div className={`dashboard-content ${isSidebarCollapsed ? 'expanded' : ''}`}>
      <div className="dashboard-header">
        <div className="date-range">
          <span className="current-date">05/02/2025 - 05/02/2025</span>
          <button className="date-button active">HOJE</button>
          <button className="date-button">7 DIAS</button>
          <button className="date-button">10 DIAS</button>
        </div>
        <div className="header-actions">
          <button className="refresh-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 3a9 9 0 0 1 9 9h-2c0-5-4-9-9-9V3m-1 18a9 9 0 0 1-9-9h2c0 5 4 9 9 9v2M3.3 4.7l1.4 1.4c-2.5 2.5-2.5 6.7 0 9.2 2.5 2.5 6.7 2.5 9.2 0l1.4 1.4A11.3 11.3 0 0 0 1.9 1.9l1.4 2.8zM18.3 19.3l-1.4-1.4c2.5-2.5 2.5-6.7 0-9.2-2.5-2.5-6.7-2.5-9.2 0l-1.4-1.4A11.3 11.3 0 0 0 22.1 22.1l-2.8-2.8z"/></svg>
          </button>
        </div>
      </div>

      <h1>Dashboard</h1>
      <div className="dashboard-cards-grid">
        {dashboardData.map((card, index) => (
          <div key={index} className="dashboard-card" style={{ backgroundColor: card.color }}>
            <h3 className="card-title">{card.title}</h3>
            {Array.isArray(card.value) ? (
              <ul className="report-list">
                {card.value.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.channel} - <strong>{item.roi}</strong>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="card-value">{card.value}</div>
            )}
            {card.percentageChange && (
              <div className={`card-percentage ${card.percentageType}`}>
                {card.percentageChange} <span className="percentage-arrow">{card.percentageType === 'up' ? '↑' : '↓'}</span>
              </div>
            )}
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-ranking-row">
        <div className="ranking-card">
          <h3>Ranking de Vendedores Mais Performáticos</h3>
          <ol className="ranking-list">
            {topSellers.map((seller, index) => (
              <li key={index}>
                <span className="seller-name">{seller.name}</span> - <span className="seller-sales">{seller.sales} vendas</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="dashboard-integration-row">
        <div className="powerbi-integration">
          <h3>Integração Power BI (Placeholder)</h3>
          <div className="integration-placeholder">
            <p>Gráficos e relatórios do Power BI seriam exibidos aqui.</p>
          </div>
        </div>

        <div className="interactive-charts">
          <h3>Gráficos Interativos (Placeholder)</h3>
          <div className="charts-placeholder">
            <p>Gráficos interativos e dashboards dinâmicos seriam renderizados aqui.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import './ClientPortfolioPage.css';

function ClientPortfolioPage() {
  const [unassignedLeads, setUnassignedLeads] = useState([]);
  const [portfolioLeads, setPortfolioLeads] = useState([]);
  const currentSellerId = 'seller1'; // Simulando o ID do corretor logado

  useEffect(() => {
    const storedLeads = localStorage.getItem('leads');
    const leads = storedLeads ? JSON.parse(storedLeads) : [];

    // Filtrar leads sem corretor responsável
    const unassigned = leads.filter(lead => !lead.responsibleSeller);
    setUnassignedLeads(unassigned);

    // Filtrar leads que pertencem à carteira do corretor logado
    const portfolio = leads.filter(lead => lead.responsibleSeller === currentSellerId);
    setPortfolioLeads(portfolio);

  }, [currentSellerId]); // Dependência no currentSellerId para refazer o filtro se o corretor mudar (simulação)


  const handleAddToPortfolio = (leadEmail) => {
    const storedLeads = localStorage.getItem('leads');
    let leads = storedLeads ? JSON.parse(storedLeads) : [];
    const updatedLeads = leads.map(lead => {
      if (lead.email === leadEmail) {
        return { ...lead, responsibleSeller: currentSellerId };
      }
      return lead;
    });
    localStorage.setItem('leads', JSON.stringify(updatedLeads));

    setUnassignedLeads(unassignedLeads.filter(lead => lead.email !== leadEmail));
    // Atualiza a lista de leads da carteira após adicionar um novo lead
    setPortfolioLeads([...portfolioLeads, updatedLeads.find(lead => lead.email === leadEmail)]);
  };

  return (
    <div className="client-portfolio-page-content">
      <h2>Carteira de Clientes</h2>
      <p>Gerencie seus leads e adicione novos leads à sua carteira.</p>

      <div className="client-portfolio-section unassigned-section">
        <h3>Leads Sem Dono</h3>
        {unassignedLeads.length > 0 ? (
          <ul className="unassigned-lead-list">
            {unassignedLeads.map((lead, index) => (
              <li key={index} className="unassigned-lead-item">
                <div className="lead-info">
                  <p><strong>Nome:</strong> {lead.name}</p>
                  <p><strong>Email:</strong> {lead.email}</p>
                </div>
                <button
                  className="add-to-portfolio-button"
                  onClick={() => handleAddToPortfolio(lead.email)}
                >
                  Adicionar à Carteira
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Parabéns! Não há leads sem dono no momento.</p>
        )}
      </div>

      <div className="client-portfolio-section my-leads-section">
        <h3>Meus Leads</h3>
        {portfolioLeads.length > 0 ? (
          <ul className="portfolio-lead-list">
            {portfolioLeads.map((lead, index) => (
              <li key={index} className="portfolio-lead-item">
                <div className="lead-info">
                  <p><strong>Nome:</strong> {lead.name}</p>
                  <p><strong>Email:</strong> {lead.email}</p>
                  {/* Adicione outras informações relevantes do lead aqui */}
                </div>
                {/* Ações adicionais para leads na carteira podem ser adicionadas aqui */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Sua carteira está vazia no momento.</p>
        )}
      </div>
    </div>
  );
}

export default ClientPortfolioPage;

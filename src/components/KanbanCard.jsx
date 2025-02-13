import React from 'react';
import './KanbanColumn.css';

function KanbanCard({ lead, onOpenModal }) {
  const cardClassName = `kanban-card ${lead.stage}`;

  const getSourceIcon = (source) => {
    switch (source) {
      case 'google_ads': return '🔍';
      case 'redes_sociais': return '📱';
      case 'indicacao': return '🤝';
      case 'outro': return '🌐';
      default: return '❓';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'venda': return '💰'; // Ícone para venda
      case 'locacao': return '🔑'; // Ícone para locação
      default: return '';
    }
  };

  const handleOpenTicket = (lead) => {
    console.log("KanbanCard - Opening modal for lead:", lead);
    onOpenModal(lead);
  };

  return (
    <div className={cardClassName}>
      <div className="kanban-card-icons">
        {lead.responsibleSeller ? (
          <span className="seller-icon" title={`Lead na carteira de ${lead.responsibleSeller}`}>👤</span>
        ) : (
          <span className="no-seller-icon" title="Lead sem dono">❓</span>
        )}
        <span className="source-icon" title={`Origem: ${lead.source}`}>
          {getSourceIcon(lead.source)}
        </span>
         {/* Novo ícone para tipo de lead */}
        <span className="type-icon" title={`Tipo: ${lead.sector}`}>
          {getTypeIcon(lead.sector)}
        </span>
      </div>
      <div className="kanban-card-content">
        <p className="lead-name"><strong>{lead.name}</strong></p>
        <p className="lead-email">Email: {lead.email}</p>
        <p className="lead-value">Valor: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lead.ticketValue)}</p>
        {/* Botão Abrir Ticket */}
        <button className="open-ticket-button" onClick={() => handleOpenTicket(lead)}>
          Abrir Ticket
        </button>
      </div>
    </div>
  );
}

export default KanbanCard;

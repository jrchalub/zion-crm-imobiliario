import React from 'react';
import './KanbanColumn.css';
import Draggable from './Draggable';

function KanbanColumn({ title, leads, renderCard }) {
  // Função para formatar valores como moeda (R$)
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  // Calcula o valor total dos leads na coluna
  const totalValue = leads.reduce((total, lead) => total + (parseFloat(lead.ticketValue) || 0), 0);

  return (
    <div className="kanban-column">
      <h3>{title} - {formatCurrency(totalValue)}</h3> {/* Exibe o título e o valor total */}
      {leads.map((lead, index) => (
        <Draggable key={lead.email} draggableId={lead.email} index={index}>
          {renderCard(lead, index)}
        </Draggable>
      ))}
      {leads.length === 0 && <div className="empty-column">Nenhum lead aqui.</div>}
    </div>
  );
}

export default KanbanColumn;

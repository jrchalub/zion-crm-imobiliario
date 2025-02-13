import React from 'react';
import './LeadList.css';

function LeadList({ leads, onConvertLeadToClient, onEditLead }) {
  return (
    <div className="lead-list-container">
      <h2>Lista de Leads</h2>
      {leads.length === 0 ? (
        <p>Nenhum lead cadastrado ainda.</p>
      ) : (
        <ul className="lead-list">
          {leads.map((lead, index) => (
            <li key={index} className="lead-item">
              <div className="lead-details">
                <p><strong>Nome:</strong> {lead.name}</p>
                <p><strong>Email:</strong> {lead.email}</p>
                <p><strong>Telefone:</strong> {lead.phone || 'Não informado'}</p>
                <p><strong>Origem:</strong> {lead.source}</p>
                <p><strong>Ticket:</strong> R$ {lead.ticketValue || 'Não informado'}</p>
                <p><strong>Conversão:</strong> {lead.conversionTime || 'Não informado'} dias</p>
                <p><strong>Estágio:</strong> {lead.stage}</p>
              </div>
              <div className="lead-actions">
                <button
                  className="convert-button"
                  onClick={() => onConvertLeadToClient(lead)}
                >
                  Converter para Cliente
                </button>
                                <button className="edit-button" onClick={() => onEditLead(lead)}>
                    Editar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LeadList;

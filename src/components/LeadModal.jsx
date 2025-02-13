import React, { useState, useEffect } from 'react';
import './LeadModal.css';

function LeadModal({ lead, onClose, onSave }) {
  if (!lead) return null;

  const [name, setName] = useState(lead.name || '');
  const [phone, setPhone] = useState(lead.phone || '');
  const [email, setEmail] = useState(lead.email || '');
  const [source, setSource] = useState(lead.source || '');
  const [ticketValue, setTicketValue] = useState(lead.ticketValue || '');
  const [stage, setStage] = useState(lead.stage || 'novo_lead');

  useEffect(() => {
    // Update local state when lead prop changes (for editing existing lead)
    if (lead) {
      setName(lead.name || '');
      setPhone(lead.phone || '');
      setEmail(lead.email || '');
      setSource(lead.source || '');
      setTicketValue(lead.ticketValue || '');
      setStage(lead.stage || 'novo_lead');
    }
  }, [lead]);


  const handleSave = () => {
    const updatedLead = {
      ...lead, // Mantém as propriedades existentes do lead
      name,
      phone,
      email,
      source,
      ticketValue,
      stage,
    };
    onSave(updatedLead);
    onClose();
  };

  return (
    <div className="lead-modal-overlay">
      <div className="lead-modal">
        <div className="modal-header">
          <h2>Editar Lead: {lead.name}</h2>
          <button className="close-button" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="edit-lead-form">
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone:</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="source">Origem:</label>
              <select id="source" value={source} onChange={(e) => setSource(e.target.value)}>
                <option value="">Selecione a origem</option>
                <option value="google_ads">Google Ads</option>
                <option value="redes_sociais">Redes Sociais</option>
                <option value="indicacao">Indicação</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="stage">Estágio:</label>
              <select id="stage" value={stage} onChange={(e) => setStage(e.target.value)}>
                <option value="novo_lead">Novo Lead</option>
                <option value="contato_realizado">Contato Realizado</option>
                <option value="proposta_enviada">Proposta Enviada</option>
                <option value="negociacao">Negociação</option>
                <option value="fechamento">Fechamento</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="ticketValue">Valor do Ticket (R$):</label>
              <input type="number" id="ticketValue" value={ticketValue} onChange={(e) => setTicketValue(e.target.value)} step="0.01" />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>Cancelar</button>
          <button type="button" className="btn-primary" onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
}

export default LeadModal;

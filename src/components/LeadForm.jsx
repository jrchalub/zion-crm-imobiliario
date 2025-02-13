import React, { useState, useEffect } from 'react';
import './LeadForm.css';

function LeadForm({ onLeadSubmit, editingLead, onUpdateLead }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [source, setSource] = useState('');
  const [ticketValue, setTicketValue] = useState('');
  const [conversionTime, setConversionTime] = useState('');
  const [stage, setStage] = useState('novo_lead');
  const [sector, setSector] = useState(''); // Tipo de Lead: venda ou locação

  useEffect(() => {
    // Preenche os campos do formulário se estiver editando um lead
    if (editingLead) {
      setName(editingLead.name);
      setPhone(editingLead.phone || '');
      setEmail(editingLead.email);
      setSource(editingLead.source);
      setTicketValue(editingLead.ticketValue || '');
      setConversionTime(editingLead.conversionTime || '');
      setStage(editingLead.stage);
      setSector(editingLead.sector || ''); // Carrega o tipo de lead
    }
  }, [editingLead]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const leadData = {
      name,
      phone,
      email,
      source,
      ticketValue,
      conversionTime,
      stage,
      sector, // Inclui o tipo de lead nos dados
    };

    if (editingLead) {
      // Se estiver editando, chama onUpdateLead
      onUpdateLead({ ...leadData, email: editingLead.email }); // Mantém o email original
    } else {
      // Se estiver adicionando, chama onLeadSubmit
      onLeadSubmit(leadData);
    }

    // Limpa os campos após o envio (ou edição)
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSource('');
    setTicketValue('');
    setConversionTime('');
    setStage('novo_lead');
    setSector(''); // Limpa o tipo de lead também
  };

  return (
    <div className="lead-form-container">
      <h2>{editingLead ? 'Editar Lead' : 'Cadastro de Lead'}</h2>
      <form onSubmit={handleSubmit} className="lead-form">
        {/* Campos do formulário (como antes) */}
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nome Completo" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(XX) XXXXX-XXXX" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="source">Origem do Lead:</label>
          <select id="source" value={source} onChange={(e) => setSource(e.target.value)} required>
            <option value="">Selecione a origem</option>
            <option value="google_ads">Google Ads</option>
            <option value="redes_sociais">Redes Sociais</option>
            <option value="indicacao">Indicação</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ticketValue">Valor do Ticket (R$):</label>
          <input type="number" id="ticketValue" value={ticketValue} onChange={(e) => setTicketValue(e.target.value)} step="0.01" placeholder="0.00" />
        </div>
        <div className="form-group">
          <label htmlFor="conversionTime">Tempo Médio de Conversão (dias):</label>
          <input type="number" id="conversionTime" value={conversionTime} onChange={(e) => setConversionTime(e.target.value)} placeholder="0" />
        </div>
        <div className="form-group">
          <label htmlFor="stage">Estágio do Funil de Vendas:</label>
          <select id="stage" value={stage} onChange={(e) => setStage(e.target.value)} required>
            <option value="novo_lead">Novo Lead</option>
            <option value="contato_realizado">Contato Realizado</option>
            <option value="proposta_enviada">Proposta Enviada</option>
            <option value="negociacao">Negociação</option>
            <option value="fechamento">Fechamento</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sector">Tipo de Lead:</label> {/* Alterado para Tipo de Lead */}
          <select id="sector" value={sector} onChange={(e) => setSector(e.target.value)}>
            <option value="">Selecione o tipo</option>
            <option value="vendas">Venda</option>
            <option value="locacao">Locação</option>
          </select>
        </div>
        <button type="submit" className="submit-button">{editingLead ? 'Salvar Alterações' : 'Cadastrar Lead'}</button>
      </form>
    </div>
  );
}

export default LeadForm;

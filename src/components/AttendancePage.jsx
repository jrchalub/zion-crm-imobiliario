import React, { useState, useEffect } from 'react';
import './AttendancePage.css';
import { sendWhatsAppMessage } from '../utils/whatsapp';

function AttendancePage() {
  const [leads, setLeads] = useState([]);
  const [activeTab, setActiveTab] = useState('aguardando');

  useEffect(() => {
    const storedLeads = localStorage.getItem('leads');
    let leadsData = storedLeads ? JSON.parse(storedLeads) : [];

    // Adiciona leads fictícios SE NÃO houver leads no localStorage
    if (leadsData.length === 0) {
      const dummyLeads = [
        { name: 'João Silva', email: 'joao.silva@example.com', phone: '11999999999', source: 'google_ads', stage: 'novo_lead', sector: 'vendas', responsibleSeller: null },
        { name: 'Maria Souza', email: 'maria.souza@example.com', phone: '21988888888', source: 'redes_sociais', stage: 'contato_realizado', sector: 'vendas', responsibleSeller: 'seller1' },
        { name: 'Carlos Pereira', email: 'carlos.pereira@example.com', phone: '31977777777', source: 'indicacao', stage: 'negociacao', sector: 'locacao', responsibleSeller: 'seller1' },
        { name: 'Ana Oliveira', email: 'ana.oliveira@example.com', phone: '41966666666', source: 'google_ads', stage: 'chatbot', sector: 'vendas', responsibleSeller: null },
        { name: 'Pedro Santos', email: 'pedro.santos@example.com', phone: '51955555555', source: 'redes_sociais', stage: 'novo_lead', sector: 'vendas', responsibleSeller: null },
        { name: 'Julia Almeida', email: 'julia.almeida@example.com', phone: '61944444444', source: 'indicacao', stage: 'contato_realizado', sector: 'locacao', responsibleSeller: 'seller2' },
        { name: 'Lucas Fernandes', email: 'lucas.fernandes@example.com', phone: '71933333333', source: 'google_ads', stage: 'negociacao', sector: 'vendas', responsibleSeller: 'seller1' },
        { name: 'Mariana Costa', email: 'mariana.costa@example.com', phone: '81922222222', source: 'redes_sociais', stage: 'chatbot', sector: 'locacao', responsibleSeller: null },
        { name: 'Rafael Rodrigues', email: 'rafael.rodrigues@example.com', phone: '91911111111', source: 'indicacao', stage: 'novo_lead', sector: 'vendas', responsibleSeller: null },
        // Novos leads fictícios (mais 8)
        { name: 'Camila Lima', email: 'camila.lima@example.com', phone: '11987654321', source: 'google_ads', stage: 'novo_lead', sector: 'vendas', responsibleSeller: null },
        { name: 'Gustavo Henrique', email: 'gustavo.henrique@example.com', phone: '21998765432', source: 'redes_sociais', stage: 'novo_lead', sector: 'locacao', responsibleSeller: null },
        { name: 'Isabela Ferreira', email: 'isabela.ferreira@example.com', phone: '31987654321', source: 'indicacao', stage: 'novo_lead', sector: 'vendas', responsibleSeller: null },
        { name: 'Fernando Alves', email: 'fernando.alves@example.com', phone: '41987654321', source: 'google_ads', stage: 'novo_lead', sector: 'locacao', responsibleSeller: null },
        { name: 'Amanda Nunes', email: 'amanda.nunes@example.com', phone: '51987654321', source: 'redes_sociais', stage: 'novo_lead', sector: 'vendas', responsibleSeller: null },
        { name: 'Ricardo Oliveira', email: 'ricardo.oliveira@example.com', phone: '61987654321', source: 'indicacao', stage: 'novo_lead', sector: 'vendas', responsibleSeller: null },
        { name: 'Sofia Pereira', email: 'sofia.pereira@example.com', phone: '71987654321', source: 'google_ads', stage: 'novo_lead', sector: 'locacao', responsibleSeller: null },
        { name: 'Thiago Costa', email: 'thiago.costa@example.com', phone: '81987654321', source: 'redes_sociais', stage: 'novo_lead', sector: 'vendas', responsibleSeller: null },
      ];
      localStorage.setItem('leads', JSON.stringify(dummyLeads));
      leadsData = dummyLeads;
    }

    setLeads(leadsData);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredLeads = leads.filter(lead => {
    if (activeTab === 'aguardando') {
      return lead.stage === 'novo_lead';
    } else if (activeTab === 'em_atendimento') {
      return lead.stage === 'contato_realizado' || lead.stage === 'negociacao';
    } else if (activeTab === 'chatbot') {
      return lead.stage === 'chatbot';
    }
    return false;
  });

  const handleSendMessage = (lead) => {
    sendWhatsAppMessage(lead.phone, `Olá ${lead.name}, aqui é da Imobiliária!`);
  };

  return (
    <div className="attendance-page-content">
      <h2>Atendimentos</h2>
      <p>Listagem e gerenciamento de leads para atendimento.</p>

      <div className="attendance-tabs">
        <button
          className={`tab-button ${activeTab === 'aguardando' ? 'active' : ''}`}
          onClick={() => handleTabChange('aguardando')}
        >
          Aguardando
        </button>
        <button
          className={`tab-button ${activeTab === 'em_atendimento' ? 'active' : ''}`}
          onClick={() => handleTabChange('em_atendimento')}
        >
          Em Atendimento
        </button>
        <button
          className={`tab-button ${activeTab === 'chatbot' ? 'active' : ''}`}
          onClick={() => handleTabChange('chatbot')}
        >
          Chatbot
        </button>
      </div>

      <div className="attendance-list-container">
        <h3>Leads para Atendimento - {activeTab.toUpperCase()}</h3>
        {filteredLeads.length > 0 ? (
          <ul className="attendance-list">
            {filteredLeads.map((lead, index) => (
              <li key={index} className="attendance-list-item">
                <div className="lead-info">
                  <p className="lead-name"><strong>{lead.name}</strong></p>
                  <p className="lead-email">Email: {lead.email}</p>
                  <p className="lead-phone">Telefone: {lead.phone || 'Não informado'}</p>
                  <p className="lead-source">Origem: {lead.source}</p>
                  <p className="lead-stage">Estágio: {lead.stage}</p>
                </div>
                <div className="lead-actions">
                  <button className="action-button" onClick={() => handleSendMessage(lead)}>
                    Enviar WhatsApp
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum lead para atendimento nesta categoria.</p>
        )}
      </div>
    </div>
  );
}

export default AttendancePage;

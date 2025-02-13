import React, { useState, useEffect } from 'react';
import './IntegrationsPage.css';

function IntegrationsPage() {
  const [webhookUrl, setWebhookUrl] = useState('');

  useEffect(() => {
    const storedUrl = localStorage.getItem('webhookUrl');
    if (storedUrl) {
      setWebhookUrl(storedUrl);
    }
  }, []);

  const handleSaveWebhook = () => {
    localStorage.setItem('webhookUrl', webhookUrl);
    alert('URL do Webhook salva com sucesso (simulado)!'); // Feedback para o usuário
  };

  return (
    <div className="integrations-page-content">
      <h2>Integrações com Portais Imobiliários e Webhooks</h2>
      <p>Conecte e sincronize seus imóveis com os principais portais e configure webhooks.</p>

      {/* Seções para Zap Imóveis, OLX, Viva Real (como antes) */}
      <div className="integrations-section">
        <h3>Zap Imóveis</h3>
        <div className="integration-status">Status: Desconectado</div>
        <button className="integration-button">Conectar</button>
      </div>

      <div className="integrations-section">
        <h3>OLX</h3>
        <div className="integration-status">Status: Conectado</div>
        <button className="integration-button">Sincronizar Imóveis</button>
      </div>

      <div className="integrations-section">
        <h3>Viva Real</h3>
        <div className="integration-status">Status: Desconectado</div>
        <button className="integration-button">Conectar</button>
      </div>

      {/* Nova seção para Webhooks */}
      <div className="integrations-section">
        <h3>Webhooks</h3>
        <div className="integration-status">
          Status: {webhookUrl ? 'Configurado' : 'Não Configurado'}
        </div>
        <div className="webhook-input-group">
          <label htmlFor="webhook-url">URL do Webhook:</label>
          <input
            type="text"
            id="webhook-url"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            placeholder="Insira a URL do webhook"
          />
        </div>
        <button className="integration-button" onClick={handleSaveWebhook}>Salvar</button>
      </div>
    </div>
  );
}

export default IntegrationsPage;

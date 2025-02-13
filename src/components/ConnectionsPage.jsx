import React from 'react';
import './ConnectionsPage.css';

function ConnectionsPage() {
  return (
    <div className="connections-page-content">
      <h2>Conexões</h2>
      <p>Gerencie suas conexões com plataformas de mensagens.</p>

      <div className="connections-section">
        <h3>WhatsApp</h3>
        <div className="connection-status">Status: Desconectado</div>
        <button className="connection-button">Conectar</button>
      </div>

      <div className="connections-section">
        <h3>Facebook</h3>
        <div className="connection-status">Status: Desconectado</div>
        <button className="connection-button">Conectar</button>
      </div>

      <div className="connections-section">
        <h3>Instagram</h3>
        <div className="connection-status">Status: Desconectado</div>
        <button className="connection-button">Conectar</button>
      </div>

      <div className="connections-section">
        <h3>Telegram</h3>
        <div className="connection-status">Status: Desconectado</div>
        <button className="connection-button">Conectar</button>
      </div>
    </div>
  );
}

export default ConnectionsPage;

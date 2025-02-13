import React from 'react';
import ClientForm from './ClientForm';
import './ClientsPage.css';

function ClientsPage({ clients }) { // Receive clients as prop
  return (
    <div className="clients-page-content">
      <h2>Gestão de Clientes</h2>
      <p>Cadastre e gerencie seus clientes.</p>

      <ClientForm />

      <div className="clients-section">
        <h3>Lista de Clientes</h3>
        {clients && clients.length > 0 ? ( // Conditionally render client list
          <ul>
            {clients.map((client, index) => (
              <li key={index}>
                <p><strong>Nome:</strong> {client.name}</p>
                <p><strong>Email:</strong> {client.email}</p>
                {/* Display other client details as needed */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum cliente cadastrado ainda.</p>
        )}
      </div>
    </div>
  );
}

export default ClientsPage;

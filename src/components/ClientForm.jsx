import React, { useState } from 'react';
import './ClientForm.css';

function ClientForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState(''); // Dados completos do comprador

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do cliente
    console.log('Cliente Cadastrado:', { name, email, phone, address });
    // Limpar os campos após o envio (opcional)
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <div className="client-form-container">
      <h2>Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit} className="client-form">
        <div className="form-group">
          <label htmlFor="name">Nome Completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Endereço Completo:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="3"
          />
        </div>
        <button type="submit" className="submit-button">Cadastrar Cliente</button>
      </form>
    </div>
  );
}

export default ClientForm;

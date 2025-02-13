import React, { useState } from 'react';
import './SellerForm.css';

function SellerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agency, setAgency] = useState('');
  const [commissionType, setCommissionType] = useState('fixed_percentage'); // Padrão: Percentual Fixo
  const [commissionValue, setCommissionValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do vendedor
    console.log('Vendedor Cadastrado:', {
      name,
      email,
      phone,
      agency,
      commissionType,
      commissionValue,
    });
    // Limpar os campos após o envio (opcional)
    setName('');
    setEmail('');
    setPhone('');
    setAgency('');
    setCommissionType('fixed_percentage');
    setCommissionValue('');
  };

  return (
    <div className="seller-form-container">
      <h2>Cadastro de Vendedor</h2>
      <form onSubmit={handleSubmit} className="seller-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
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
          <label htmlFor="agency">Imobiliária Associada:</label>
          <input
            type="text"
            id="agency"
            value={agency}
            onChange={(e) => setAgency(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="commissionType">Tipo de Comissão:</label>
          <select
            id="commissionType"
            value={commissionType}
            onChange={(e) => setCommissionType(e.target.value)}
          >
            <option value="fixed_percentage">Percentual Fixo</option>
            <option value="variable">Variável por Faixa de Valor</option>
            <option value="performance_based">Baseada em Performance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="commissionValue">Valor da Comissão:</label>
          <input
            type="number"
            id="commissionValue"
            value={commissionValue}
            onChange={(e) => setCommissionValue(e.target.value)}
            step="0.01" // Permite decimais para percentuais
          />
        </div>
        <button type="submit" className="submit-button">Cadastrar Vendedor</button>
      </form>
    </div>
  );
}

export default SellerForm;

import React, { useState } from 'react';
import './SaleForm.css';

function SaleForm() {
  const [property, setProperty] = useState(''); // Imóvel vendido (pode ser um ID ou nome)
  const [client, setClient] = useState('');     // Cliente comprador (pode ser um ID ou nome)
  const [seller, setSeller] = useState('');     // Vendedor responsável (pode ser um ID ou nome)
  const [saleDate, setSaleDate] = useState('');
  const [saleValue, setSaleValue] = useState('');
  const [commissionValue, setCommissionValue] = useState(''); // Comissão calculada ou inserida manualmente

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados da venda
    console.log('Venda Registrada:', {
      property,
      client,
      seller,
      saleDate,
      saleValue,
      commissionValue,
    });
    // Limpar os campos após o envio (opcional)
    setProperty('');
    setClient('');
    setSeller('');
    setSaleDate('');
    setSaleValue('');
    setCommissionValue('');
  };

  return (
    <div className="sale-form-container">
      <h2>Registrar Nova Venda</h2>
      <form onSubmit={handleSubmit} className="sale-form">
        <div className="form-group">
          <label htmlFor="property">Imóvel Vendido:</label>
          <input
            type="text"
            id="property"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            placeholder="Nome ou ID do Imóvel"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="client">Cliente Comprador:</label>
          <input
            type="text"
            id="client"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            placeholder="Nome ou ID do Cliente"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seller">Vendedor Responsável:</label>
          <input
            type="text"
            id="seller"
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
            placeholder="Nome ou ID do Vendedor"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="saleDate">Data da Venda:</label>
          <input
            type="date"
            id="saleDate"
            value={saleDate}
            onChange={(e) => setSaleDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="saleValue">Valor da Venda (R$):</label>
          <input
            type="number"
            id="saleValue"
            value={saleValue}
            onChange={(e) => setSaleValue(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="commissionValue">Comissão (R$):</label>
          <input
            type="number"
            id="commissionValue"
            value={commissionValue}
            onChange={(e) => setCommissionValue(e.target.value)}
            step="0.01"
            placeholder="Opcional, pode ser calculado automaticamente"
          />
        </div>
        <button type="submit" className="submit-button">Registrar Venda</button>
      </form>
    </div>
  );
}

export default SaleForm;

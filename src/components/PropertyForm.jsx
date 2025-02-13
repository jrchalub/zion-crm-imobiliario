import React, { useState } from 'react';
import './PropertyForm.css';

function PropertyForm() {
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [saleValue, setSaleValue] = useState('');
  const [rentValue, setRentValue] = useState('');
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [garage, setGarage] = useState('');
  const [status, setStatus] = useState('disponivel');
  const [responsibleSeller, setResponsibleSeller] = useState('');
  const [type, setType] = useState(''); // Novo estado para o tipo de imóvel

  const sellers = [
    { id: 'seller1', name: 'João Corretor' },
    { id: 'seller2', name: 'Maria Vendedora' },
    { id: 'seller3', name: 'Carlos Imobiliário' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Imóvel Cadastrado:', {
      photos,
      description,
      location,
      saleValue,
      rentValue,
      area,
      bedrooms,
      bathrooms,
      garage,
      status,
      responsibleSeller,
      type, // Incluindo o tipo de imóvel
    });
    setPhotos([]);
    setDescription('');
    setLocation('');
    setSaleValue('');
    setRentValue('');
    setArea('');
    setBedrooms('');
    setBathrooms('');
    setGarage('');
    setStatus('disponivel');
    setResponsibleSeller('');
    setType(''); // Limpar o tipo de imóvel
  };

  return (
    <div className="property-form-container">
      <h2>Cadastrar Novo Imóvel</h2>
      <form onSubmit={handleSubmit} className="property-form">
        <div className="form-columns">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="description">Descrição:</label>
              <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" />
            </div>
            <div className="form-group">
              <label htmlFor="location">Localização:</label>
              <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="saleValue">Valor de Venda (R$):</label>
              <input type="number" id="saleValue" value={saleValue} onChange={(e) => setSaleValue(e.target.value)} step="0.01" />
            </div>
            <div className="form-group">
              <label htmlFor="rentValue">Valor de Aluguel (R$):</label>
              <input type="number" id="rentValue" value={rentValue} onChange={(e) => setRentValue(e.target.value)} step="0.01" />
            </div>
            {/* Novo campo: Tipo de Imóvel */}
            <div className="form-group">
              <label htmlFor="type">Tipo de Imóvel:</label>
              <select id="type" value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="">Selecione o Tipo</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Terreno">Terreno</option>
                <option value="Comercial">Comercial</option>
              </select>
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="area">Metragem (m2):</label>
              <input type="number" id="area" value={area} onChange={(e) => setArea(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="bedrooms">Número de Quartos:</label>
              <input type="number" id="bedrooms" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="bathrooms">Número de Banheiros:</label>
              <input type="number" id="bathrooms" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="garage">Vagas de Garagem:</label>
              <input type="number" id="garage" value={garage} onChange={(e) => setGarage(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status do Imóvel:</label>
              <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="disponivel">Disponível</option>
                <option value="vendido">Vendido</option>
                <option value="alugado">Alugado</option>
                <option value="em_negociacao">Em Negociação</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="responsibleSeller">Corretor Responsável:</label>
              <select id="responsibleSeller" value={responsibleSeller} onChange={(e) => setResponsibleSeller(e.target.value)}>
                <option value="">Selecione o Corretor</option>
                {sellers.map((seller) => (
                  <option key={seller.id} value={seller.id}>{seller.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="submit-button">Cadastrar Imóvel</button>
      </form>
    </div>
  );
}

export default PropertyForm;

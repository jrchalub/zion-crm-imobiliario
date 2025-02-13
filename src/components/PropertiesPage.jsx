import React, { useState, useEffect } from 'react';
import PropertyForm from './PropertyForm';
import './PropertiesPage.css';

function PropertiesPage() {
  const [activeTab, setActiveTab] = useState('data');
  const [properties, setProperties] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [minPriceFilter, setMinPriceFilter] = useState('');
  const [maxPriceFilter, setMaxPriceFilter] = useState('');
  const [bedroomsFilter, setBedroomsFilter] = useState('');
  const [bathroomsFilter, setBathroomsFilter] = useState('');
  const [garageFilter, setGarageFilter] = useState('');

  useEffect(() => {
    const storedProperties = localStorage.getItem('properties');
    let propertiesData = storedProperties ? JSON.parse(storedProperties) : [];

    // Adiciona imóveis fictícios SE NÃO houver imóveis no localStorage
    if (propertiesData.length === 0) {
      const dummyProperties = [
        { id: 1, type: 'Casa', location: 'Bairro Nobre', saleValue: 850000, area: 250, bedrooms: 3, bathrooms: 2, garage: 2, description: 'Linda casa em bairro nobre...', photos: [], status: 'disponivel', responsibleSeller: 'seller1' },
        { id: 2, type: 'Apartamento', location: 'Centro', saleValue: 450000, area: 120, bedrooms: 2, bathrooms: 1, garage: 1, description: 'Apartamento no centro da cidade...', photos: [], status: 'disponivel', responsibleSeller: 'seller2' },
        { id: 3, type: 'Casa', location: 'Condomínio Fechado', saleValue: 1200000, area: 350, bedrooms: 4, bathrooms: 3, garage: 3, description: 'Casa de luxo em condomínio fechado...', photos: [], status: 'vendido', responsibleSeller: 'seller1' },
        { id: 4, type: 'Apartamento', location: 'Bairro Universitário', saleValue: 320000, area: 80, bedrooms: 1, bathrooms: 1, garage: 0, description: 'Apartamento próximo à universidade...', photos: [], status: 'alugado', responsibleSeller: 'seller3' },
        { id: 5, type: 'Terreno', location: 'Zona Rural', saleValue: 150000, area: 1000, bedrooms: 0, bathrooms: 0, garage: 0, description: 'Terreno amplo em área rural...', photos: [], status: 'disponivel', responsibleSeller: null },
      ];
      localStorage.setItem('properties', JSON.stringify(dummyProperties));
      propertiesData = dummyProperties;
    }

    setProperties(propertiesData);
  }, []);

    const handleFilterChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'location': setLocationFilter(value); break;
      case 'type': setTypeFilter(value); break;
      case 'minPrice': setMinPriceFilter(value); break;
      case 'maxPrice': setMaxPriceFilter(value); break;
      case 'bedrooms': setBedroomsFilter(value); break;
      case 'bathrooms': setBathroomsFilter(value); break;
      case 'garage': setGarageFilter(value); break;
      default: break;
    }
  };

  const filterProperties = () => {
    return properties.filter(property => {
      return (
        (!locationFilter || property.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
        (!typeFilter || property.type === typeFilter) &&
        (minPriceFilter === '' || property.saleValue >= parseFloat(minPriceFilter)) &&
        (maxPriceFilter === '' || property.saleValue <= parseFloat(maxPriceFilter)) &&
        (bedroomsFilter === '' || property.bedrooms === parseInt(bedroomsFilter)) &&
        (bathroomsFilter === '' || property.bathrooms === parseInt(bathroomsFilter)) &&
        (garageFilter === '' || property.garage === parseInt(garageFilter))
      );
    });
  };

  const filteredProperties = filterProperties();

  return (
    <div className="properties-page-content">
      <h2>Cadastro e Gerenciamento de Imóveis</h2>
      <p>Adicione novas propriedades e gerencie seus imóveis.</p>

      <div className="property-tabs">
        <button className={`tab-button ${activeTab === 'data' ? 'active' : ''}`} onClick={() => setActiveTab('data')}>
          Dados do Imóvel
        </button>
        <button className={`tab-button ${activeTab === 'photos' ? 'active' : ''}`} onClick={() => setActiveTab('photos')}>
          Fotos
        </button>
      </div>

      <div className="property-form-wrapper">
        {activeTab === 'data' && <PropertyForm />}
        {activeTab === 'photos' && (
          <div className="property-photos-placeholder">
            <p>Em breve: Upload e gerenciamento de fotos do imóvel.</p>
          </div>
        )}
      </div>

      <div className="properties-section">
        <h3>Lista de Imóveis</h3>

        <div className="property-filters">
          {/* Campos de filtro */}
          <input type="text" name="location" placeholder="Localização" value={locationFilter} onChange={handleFilterChange} />
          <select name="type" value={typeFilter} onChange={handleFilterChange}>
            <option value="">Tipo</option>
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Terreno">Terreno</option>
            <option value="Comercial">Comercial</option>
          </select>
          <input type="number" name="minPrice" placeholder="Preço Mínimo" value={minPriceFilter} onChange={handleFilterChange} />
          <input type="number" name="maxPrice" placeholder="Preço Máximo" value={maxPriceFilter} onChange={handleFilterChange} />
          <input type="number" name="bedrooms" placeholder="Quartos" value={bedroomsFilter} onChange={handleFilterChange} />
          <input type="number" name="bathrooms" placeholder="Banheiros" value={bathroomsFilter} onChange={handleFilterChange} />
          <input type="number" name="garage" placeholder="Garagem" value={garageFilter} onChange={handleFilterChange} />
        </div>

        {filteredProperties.length > 0 ? (
          <div className="property-list">
            {filteredProperties.map(property => (
              <div key={property.id} className="property-card">
                {/* Placeholder para foto do imóvel */}
                <div className="property-image-placeholder">Foto</div>
                <div className="property-details">
                  <h4>{property.type} - {property.location}</h4>
                  <p>{property.description}</p>
                  <p><strong>Valor de Venda:</strong> R$ {property.saleValue}</p>
                  {/* Outras informações do imóvel */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhum imóvel encontrado com os filtros aplicados.</p>
        )}
      </div>
    </div>
  );
}

export default PropertiesPage;

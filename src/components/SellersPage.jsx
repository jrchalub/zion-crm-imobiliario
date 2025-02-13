import React from 'react';
import SellerForm from './SellerForm'; // Import SellerForm
import './SellersPage.css';

function SellersPage() {
  return (
    <div className="sellers-page-content">
      <h2>Gestão de Vendedores e Comissões</h2>
      <p>Cadastre e gerencie seus corretores e vendedores.</p>
      <SellerForm /> {/* Include SellerForm */}
      {/* Outros componentes da página de vendedores serão adicionados aqui */}
    </div>
  );
}

export default SellersPage;

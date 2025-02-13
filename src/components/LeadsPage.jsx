import React, { useState, useEffect } from 'react';
import './LeadsPage.css';
import AddLeadModal from './AddLeadModal'; // Import the new modal component
import LeadModal from './LeadModal';

function LeadsPage() {
  const [leads, setLeads] = useState(() => {
    const storedLeads = localStorage.getItem('leads');
    return storedLeads ? JSON.parse(storedLeads) : [];
  });
  const [editingLead, setEditingLead] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('leads', JSON.stringify(leads));
  }, [leads]);

  const handleLeadSubmit = (newLead) => {
    setLeads([...leads, newLead]);
    setEditingLead(null);
    setIsAddLeadModalOpen(false);
  };

    const handleEditLead = (lead) => {
        setEditingLead(lead);
        setIsEditModalOpen(true); // Open the edit modal
    };

    const handleUpdateLead = (updatedLead) => {
        const updatedLeads = leads.map(lead =>
            lead.email === updatedLead.email ? updatedLead : lead
        );
        setLeads(updatedLeads);
        setEditingLead(null);
        setIsEditModalOpen(false); // Close after update
    };

  const handleDeleteLead = (leadEmail) => {
    const updatedLeads = leads.filter(lead => lead.email !== leadEmail);
    setLeads(updatedLeads);
    setEditingLead(null);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleOpenAddLeadModal = () => {
    setIsAddLeadModalOpen(true);
  };

  const handleCloseAddLeadModal = () => {
    setIsAddLeadModalOpen(false);
  };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setEditingLead(null); // Reset editingLead
    };

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(filterText.toLowerCase()) ||
    lead.email.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="leads-page-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h2>Cadastro de Leads</h2>
      <p>Cadastre novos leads para o CRM.</p>

      <button className="add-lead-button" onClick={handleOpenAddLeadModal}>
        Adicionar Lead
      </button>

      <AddLeadModal
        isOpen={isAddLeadModalOpen}
        onClose={handleCloseAddLeadModal}
        onLeadSubmit={handleLeadSubmit}
      />

            {editingLead && (
                <LeadModal
                    lead={editingLead}
                    onClose={handleCloseEditModal}
                    onSave={handleUpdateLead}
                />
            )}

      <div className="leads-list-container" style={{ flex: '1', overflowY: 'auto' }}>
        <h3>Lista de Leads</h3>
        <div className="filter-container">
          <label htmlFor="filter-input">Filtrar:</label>
          <input
            type="text"
            id="filter-input"
            value={filterText}
            onChange={handleFilterChange}
            placeholder="Filtrar por nome ou email..."
          />
        </div>
        {filteredLeads.length > 0 ? (
          <ul className="leads-list">
            {filteredLeads.map((lead, index) => (
              <li key={index} className="lead-item">
                <div className="lead-details">
                  <p><strong>Nome:</strong> {lead.name}</p>
                  <p><strong>Email:</strong> {lead.email}</p>
                </div>
                <div className="lead-actions">
                  <button className="edit-button" onClick={() => handleEditLead(lead)}>Editar</button>
                  <button className="delete-button" onClick={() => handleDeleteLead(lead.email)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum lead encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default LeadsPage;

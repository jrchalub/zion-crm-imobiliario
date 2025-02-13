import React, { useState, useEffect, useCallback } from 'react';
import KanbanBoard from './KanbanBoard';
import LeadModal from './LeadModal';
import LeadForm from './LeadForm';
import './KanbanPage.css';

function KanbanPage() {
  const [leads, setLeads] = useState(() => {
    const storedLeads = localStorage.getItem('leads');
    return storedLeads ? JSON.parse(storedLeads) : [];
  });
  const [selectedSector, setSelectedSector] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('leads', JSON.stringify(leads));
  }, [leads]);

  const handleSectorChange = useCallback((event) => {
    setSelectedSector(event.target.value);
  }, [setSelectedSector]);

  const handleOpenModal = useCallback((lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  }, [setIsModalOpen, setSelectedLead]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLead(null);
  };

  const handleSaveModal = (updatedLead) => {
    const updatedLeads = leads.map(l =>
      l.email === updatedLead.email ? updatedLead : l
    );
    setLeads(updatedLeads);
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
    handleCloseModal();
  };

  // Functions for Import Modal
  const handleOpenImportModal = () => {
    setIsImportModalOpen(true);
  };

  const handleCloseImportModal = () => {
    setIsImportModalOpen(false);
  };

  const handleImportLeads = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const csvText = evt.target.result;
      const parsedLeads = parseCSV(csvText);
      if (parsedLeads) {
        setLeads([...leads, ...parsedLeads]);
        setIsImportModalOpen(false);
      } else {
        alert("Erro ao processar CSV. Verifique o formato do arquivo.");
      }
    };
    reader.onerror = () => {
      alert("Erro ao ler o arquivo.");
      setIsImportModalOpen(false);
    };
    reader.readAsText(file);
  };

  const parseCSV = (csvText) => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    const parsedLeads = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length === headers.length) {
        const lead = {};
        for (let j = 0; j < headers.length; j++) {
          lead[headers[j].trim()] = values[j].trim();
        }
        if(lead.email){
          parsedLeads.push(lead);
        }
      }
    }
    return parsedLeads.length > 0 ? parsedLeads : null;
  };

  // Function to download CSV template
  const handleDownloadTemplate = () => {
    const templateCsvContent = "name,email,phone,source,ticketValue,conversionTime,stage,sector\n" +
                               "Nome do Lead,email@example.com,123456789,google_ads,1500,30,novo_lead,vendas\n" +
                               "Outro Lead,outro@example.com,987654321,redes_sociais,2500,60,contato_realizado,locacao";

    const blob = new Blob([templateCsvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'leads_template.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  const filteredLeads = selectedSector
    ? leads.filter(lead => lead.sector === selectedSector)
    : leads;

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    if (source.droppableId === destination.droppableId) return;

    const lead = leads.find(l => l.email === draggableId);
    if (!lead) return;

    const updatedLead = { ...lead, stage: destination.droppableId };
    const updatedLeads = leads.map(l => (l.email === draggableId ? updatedLead : l));

    setLeads(updatedLeads);
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
  };

  return (
    <div className="kanban-page-content">
      <h2>Kanban de Leads</h2>
      <p>Visualize e gerencie seus leads no funil de vendas.</p>

      <div className="kanban-actions">
        <div className="kanban-filters">
          <div className="sector-filter">
            <label htmlFor="sector-select">Filtrar por Setor:</label>
            <select
              id="sector-select"
              value={selectedSector}
              onChange={handleSectorChange}
            >
              <option value="">Todos os Setores</option>
              <option value="vendas">Vendas</option>
              <option value="locacao">Locacao</option>
              <option value="administrativo">Administrativo</option>
              <option value="outros">Outros</option>
            </select>
          </div>
        </div>
        <div>
          {/* Removed Add Lead Button */}
          <button className="import-lead-button" onClick={handleOpenImportModal}>
            Importar Leads (CSV)
          </button>
          <button className="download-template-button" onClick={handleDownloadTemplate}>
            Baixar Template CSV
          </button>
        </div>
      </div>

      <KanbanBoard leads={filteredLeads} onDragEnd={handleDragEnd} onOpenModal={handleOpenModal} />

      {isModalOpen && (
        <LeadModal
          lead={selectedLead}
          onClose={handleCloseModal}
          onSave={handleSaveModal}
        />
      )}

      {isImportModalOpen && (
        <div className="import-modal-overlay">
          <div className="import-modal-content">
            <h3>Importar Leads de CSV</h3>
            <p>Selecione um arquivo CSV para importar os leads.</p>
            <input type="file" accept=".csv" onChange={handleImportLeads} />
            <div className="import-modal-buttons">
              <button className="close-import-modal-button" onClick={handleCloseImportModal}>
                Cancelar
              </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KanbanPage;

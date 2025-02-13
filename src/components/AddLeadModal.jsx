import React from 'react';
import LeadForm from './LeadForm';
import './AddLeadModal.css'; // Separate CSS for the modal

function AddLeadModal({ isOpen, onClose, onLeadSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="add-lead-modal-overlay">
      <div className="add-lead-modal-content">
        <LeadForm onLeadSubmit={onLeadSubmit} />
        <button className="close-add-lead-modal-button" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default AddLeadModal;

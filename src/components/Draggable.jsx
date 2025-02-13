import React from 'react';

// Componente simulado para Draggable
const Draggable = ({ children, draggableId, index }) => {
  // Em uma implementação real, este componente usaria uma biblioteca como react-beautiful-dnd
  // para tornar um elemento arrastável.
  // Aqui, apenas passamos os filhos, draggableId e index.
  return (
    <div className="draggable" data-draggable-id={draggableId} data-index={index}>
      {children}
    </div>
  );
};

export default Draggable;

import React from 'react';

// Componente simulado para Droppable
const Droppable = ({ children, droppableId }) => {
  // Em uma implementação real, este componente usaria uma biblioteca como react-beautiful-dnd
  // para tornar um elemento um alvo de drop.
  // Aqui, apenas passamos os filhos e o droppableId.
  return (
    <div className="droppable" data-droppable-id={droppableId}>
      {children}
    </div>
  );
};

export default Droppable;

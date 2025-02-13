import React from 'react';

// Componente simulado para DragDropContext
const DragDropContext = ({ children, onDragEnd }) => {
  // Em uma implementação real, este componente usaria uma biblioteca como react-beautiful-dnd
  // para fornecer o contexto de drag and drop.
  // Aqui, apenas passamos os filhos e a função onDragEnd.
  return <div className="drag-drop-context">{children}</div>;
};

export default DragDropContext;

import React from 'react';
import KanbanColumn from './KanbanColumn';
import KanbanCard from './KanbanCard';
import './KanbanBoard.css';
import DragDropContext from './DragDropContext';
import Droppable from './Droppable';

function KanbanBoard({ leads, onDragEnd, onOpenModal }) { // Receive onOpenModal prop
  const stages = [
    { title: 'Novo Lead', stage: 'novo_lead' },
    { title: 'Contato Realizado', stage: 'contato_realizado' },
    { title: 'Proposta Enviada', stage: 'proposta_enviada' },
    { title: 'Negociação', stage: 'negociacao' },
    { title: 'Fechamento', stage: 'fechamento' },
  ];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {stages.map((stageInfo) => (
          <Droppable key={stageInfo.stage} droppableId={stageInfo.stage}>
            <KanbanColumn
              title={stageInfo.title}
              stage={stageInfo.stage}
              leads={leads.filter(lead => lead.stage === stageInfo.stage)}
              renderCard={(lead, index) => (
                <KanbanCard
                  lead={lead}
                  index={index}
                  onOpenModal={onOpenModal} // Pass onOpenModal prop down to KanbanCard
                />
              )}
            />
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;

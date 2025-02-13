import React, { useState } from 'react';
import './FlowBuilderPage.css';

function FlowBuilderPage() {
  const [nodes, setNodes] = useState([]);

  const addNode = () => {
    const newNode = {
      id: Date.now(), // ID único para o nó
      text: `Novo Nó ${nodes.length + 1}`, // Texto padrão do nó
    };
    setNodes([...nodes, newNode]);
  };

  return (
    <div className="flow-builder-page-content">
      <h2>Construtor de Fluxos de Chatbot</h2>
      <p>Crie e gerencie fluxos de trabalho para seus chatbots.</p>

      <div className="flow-builder-container">
        <button className="add-node-button" onClick={addNode}>Adicionar Nó</button>

        <div className="nodes-container">
          {nodes.map(node => (
            <div key={node.id} className="flow-node">
              {node.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlowBuilderPage;

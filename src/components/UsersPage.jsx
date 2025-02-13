import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import './UsersPage.css';

function UsersPage() {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [editingUser, setEditingUser] = useState(null);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleUserSubmit = (newUser) => {
    setUsers([...users, { ...newUser, id: Date.now() }]); // Adiciona um ID único
    setEditingUser(null);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    setEditingUser(null); // Limpa edição se o usuário excluído estiver sendo editado
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filterText.toLowerCase()) ||
    user.email.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="users-page-content">
      <h2>Gerenciamento de Usuários</h2>
      <p>Adicione, edite e exclua usuários do sistema.</p>

      <UserForm
        onUserSubmit={handleUserSubmit}
        editingUser={editingUser}
        onUpdateUser={handleUpdateUser}
      />

      <div className="users-list-container">
        <h3>Lista de Usuários</h3>
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
        {filteredUsers.length > 0 ? (
          <ul className="users-list">
            {filteredUsers.map(user => (
              <li key={user.id} className="user-item">
                <div className="user-info">
                  <p><strong>Nome:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Perfil:</strong> {user.role}</p>
                </div>
                <div className="user-actions">
                  <button className="edit-button" onClick={() => handleEditUser(user)}>Editar</button>
                  <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default UsersPage;

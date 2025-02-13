import React, { useState, useEffect } from 'react';
import './UserForm.css';

function UserForm({ onUserSubmit, editingUser, onUpdateUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // CUIDADO: Não armazene senhas em texto plano em produção!
  const [role, setRole] = useState('corretor'); // Valor padrão

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      // Não preenche a senha por segurança
      setRole(editingUser.role);
    }
  }, [editingUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      password, // CUIDADO: Em produção, use hash e salt!
      role,
    };

    if (editingUser) {
      onUpdateUser({ ...userData, id: editingUser.id }); // Mantém o ID original
    } else {
      onUserSubmit(userData);
    }

    clearForm();
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRole('corretor');
  };

  return (
    <div className="user-form-container">
      <h2>{editingUser ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha (simulado):</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="role">Perfil:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="gerente">Gerente</option>
            <option value="corretor">Corretor</option>
          </select>
        </div>
        <button type="submit" className="submit-button">{editingUser ? 'Salvar' : 'Adicionar'}</button>
      </form>
    </div>
  );
}

export default UserForm;

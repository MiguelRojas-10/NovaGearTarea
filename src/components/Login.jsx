import { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('cliente');

  const handleLogin = (e) => {
    e.preventDefault();
    const role = {
      admin: 'Administrador',
      vendedor: 'Vendedor',
      cliente: 'Cliente',
    }[selectedRole];
    onLogin({ username, role });
  };

  return (
    <div className="login-container">
      <div className="glass-card">
        <h1>NovaGear</h1>
        <p>Sistema de Gestión y Catálogo</p>

        <div className="role-selector" aria-label="Perfiles">
          <button
            type="button"
            className={`role-option role-admin${selectedRole === 'admin' ? ' active' : ''}`}
            aria-pressed={selectedRole === 'admin'}
            onClick={() => setSelectedRole('admin')}
          >
            Admin
          </button>
          <button
            type="button"
            className={`role-option role-seller${selectedRole === 'vendedor' ? ' active' : ''}`}
            aria-pressed={selectedRole === 'vendedor'}
            onClick={() => setSelectedRole('vendedor')}
          >
            Vendedor
          </button>
          <button
            type="button"
            className={`role-option role-client${selectedRole === 'cliente' ? ' active' : ''}`}
            aria-pressed={selectedRole === 'cliente'}
            onClick={() => setSelectedRole('cliente')}
          >
            Cliente
          </button>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Usuario</label>
            <input 
              type="text" 
              placeholder="Ingresa tu usuario" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Ingresar</button>
        </form>
      </div>
    </div>
  );
} 
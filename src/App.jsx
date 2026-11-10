import { useState } from 'react';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import SellerDashboard from './components/SellerDashboard';
import ClientDashboard from './components/ClientDashboard';

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  const onLogout = () => setUser(null);

  switch (user.role) {
    case 'Administrador':
      return <AdminDashboard user={user} onLogout={onLogout} />;
    case 'Vendedor':
      return <SellerDashboard user={user} onLogout={onLogout} />;
    case 'Cliente':
      return <ClientDashboard user={user} onLogout={onLogout} />;
    default:
      return <Login onLogin={setUser} />;
  }
}

export default App;
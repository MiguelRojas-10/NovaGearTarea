export default function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">NovaGear</div>
      <div className="navbar-user">
        <span className="role-badge">{user.role}</span>
        <button onClick={onLogout} className="btn-logout">Salir</button>
      </div>
    </nav>
  );
}
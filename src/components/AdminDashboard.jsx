import Navbar from './Navbar';

export default function AdminDashboard({ user, onLogout }) {
  return (
    <>
      <Navbar user={user} onLogout={onLogout} />
      <div className="dashboard-container">
        <h2 className="page-title">Productos</h2>
        <p className="page-description">Catálogo general</p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Marca</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Teclado Aula Hero 68</td>
                <td>Aula</td>
              </tr>
              <tr>
                <td>Mouse Gamer UltraLight</td>
                <td>Aula</td>
              </tr>
              <tr>
                <td>Auriculares Linsoul Kiwi Ears Belle</td>
                <td>Aula</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
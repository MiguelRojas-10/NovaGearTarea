import Navbar from './Navbar';

export default function SellerDashboard({ user, onLogout }) {
  return (
    <>
      <Navbar user={user} onLogout={onLogout} />
      <div className="dashboard-container">
        <h2 className="page-title">Inventario de Aula</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Teclado Aula Hero 68</td>
                <td>200.000 COP</td>
              </tr>
              <tr>
                <td>Mouse Gamer UltraLight</td>
                <td>99.990 COP</td>
              </tr>
              <tr>
                <td>Auriculares Linsoul kiwi ears belle</td>
                <td>159.990 COP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
import { useState } from 'react';
import Navbar from './Navbar';

export default function SellerDashboard({ user, onLogout }) {
  // Estado inicial con los periféricos de Aula
  const [products, setProducts] = useState([
    { name: 'Teclado Aula Hero 68', price: '200.000 COP' },
    { name: 'Mouse Gamer UltraLight', price: '99.990 COP' },
    { name: 'Auriculares Linsoul kiwi ears belle', price: '159.990 COP' }
  ]);

  // Estados del formulario
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  
  // Estado para controlar el índice del elemento que se está editando
  const [editingIndex, setEditingIndex] = useState(null);

  // Función para guardar (Crear o Actualizar)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !price.trim()) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (editingIndex !== null) {
      // Actualizar producto existente
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = { name, price };
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      // Agregar nuevo producto
      setProducts([...products, { name, price }]);
    }

    // Limpiar formulario
    setName('');
    setPrice('');
  };

  // Cargar datos en el formulario para editar
  const handleEdit = (index) => {
    setEditingIndex(index);
    setName(products[index].name);
    setPrice(products[index].price);
  };

  // Cancelar edición
  const cancelEdit = () => {
    setEditingIndex(null);
    setName('');
    setPrice('');
  };

  // Eliminar producto
  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
    if (editingIndex === index) {
      cancelEdit();
    }
  };

  return (
    <>
      <Navbar user={user} onLogout={onLogout} />
      <div className="dashboard-container">
        <h2 className="page-title">Inventario de Aula</h2>
        <p className="page-description">Gestión de periféricos (Panel de Vendedor)</p>

        {/* Formulario CRUD simple */}
        <div className="crud-card">
          <h3>{editingIndex !== null ? 'Editar Periférico' : 'Agregar Periférico'}</h3>
          <form onSubmit={handleSubmit} className="crud-form">
            <input
              type="text"
              placeholder="Nombre del periférico"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Precio (ej. 150.000 COP)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="crud-actions">
              <button type="submit" className="btn-primary">
                {editingIndex !== null ? 'Actualizar' : 'Guardar'}
              </button>
              {editingIndex !== null && (
                <button type="button" onClick={cancelEdit} className="btn-secondary">
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Tabla de Inventario */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="table-actions">
                      <button onClick={() => handleEdit(index)} className="btn-edit">
                        Editar
                      </button>
                      <button onClick={() => handleDelete(index)} className="btn-delete">
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
import { useState } from 'react';
import Navbar from './Navbar';

export default function AdminDashboard({ user, onLogout }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Teclado Aula Hero 68',
      brand: 'Aula',
      price: '200.000 COP',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0552%2F2803%2F9264%2Ffiles%2FAULA_Hero68_HE_25_1.jpg%3Fv%3D1745731849&f=1&nofb=1&ipt=31f58a6bdda35b70c4fee86b214307de17245a77ff990212b301f0781ec850ba&ipo=images'
    },
    {
      id: 2,
      name: 'Mouse Gamer UltraLight',
      brand: 'Aula',
      price: '99.990 COP',
      img: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Auriculares Linsoul kiwi ears belle',
      brand: 'Aula',
      price: '159.990 COP',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71B7AZVYaLL._AC_SL1500_.jpg&f=1&nofb=1&ipt=a196308e86d513d7da3cf983548f099a0fea12e28eb183261c4ee545b9f0416c&ipo=images'
    },
    {
      id: 4,
      name: 'Monitor 27 pulgadas 144Hz',
      brand: 'AOC',
      price: '299.990 COP',
      img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=400&auto=format&fit=crop'
    }
  ]);

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !brand.trim() || !price.trim()) {
      alert('Los campos Producto, Marca y Precio son obligatorios');
      return;
    }

    if (editingId !== null) {
      setProducts(
        products.map((p) =>
          p.id === editingId ? { ...p, name, brand, price, img: img || p.img } : p
        )
      );
      setEditingId(null);
    } else {
      const nuevoProducto = {
        id: Date.now(),
        name,
        brand,
        price,
        img: img || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop'
      };
      setProducts([...products, nuevoProducto]);
    }

    setName('');
    setBrand('');
    setPrice('');
    setImg('');
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setName(product.name);
    setBrand(product.brand);
    setPrice(product.price);
    setImg(product.img || '');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName('');
    setBrand('');
    setPrice('');
    setImg('');
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    if (editingId === id) {
      cancelEdit();
    }
  };

  return (
    <>
      <Navbar user={user} onLogout={onLogout} />
      <div className="dashboard-container">
        <h2 className="page-title">Gestión de Productos</h2>
        <p className="page-description">Panel de administración (CRUD completo)</p>

        {/* Formulario de Creación / Edición envuelto en la tarjeta estilizada */}
        <div className="crud-card">
          <h3>{editingId !== null ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h3>
          <form onSubmit={handleSubmit} className="crud-form">
            <input
              type="text"
              placeholder="Nombre del producto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Marca"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <input
              type="text"
              placeholder="Precio (ej. 200.000 COP)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="URL de imagen (opcional)"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <div className="crud-actions">
              <button type="submit" className="btn-primary">
                {editingId !== null ? 'Actualizar Producto' : 'Guardar Producto'}
              </button>
              {editingId !== null && (
                <button type="button" onClick={cancelEdit} className="btn-secondary">
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Tabla de Listado */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Marca</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="table-actions">
                      <button onClick={() => handleEdit(product)} className="btn-edit">
                        Editar
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="btn-delete">
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
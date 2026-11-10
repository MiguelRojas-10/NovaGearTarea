import Navbar from './Navbar';

export default function ClientDashboard({ user, onLogout }) {
  const products = [
    {
      id: 1,
      name: 'Teclado Aula Hero 68',
      price: '200.000 COP',
      company: 'Aula',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0552%2F2803%2F9264%2Ffiles%2FAULA_Hero68_HE_25_1.jpg%3Fv%3D1745731849&f=1&nofb=1&ipt=31f58a6bdda35b70c4fee86b214307de17245a77ff990212b301f0781ec850ba&ipo=images'
    },
    {
      id: 2,
      name: 'Mouse Gamer UltraLight',
      price: '99.990 COP',
      company: 'Aula',
      img: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Auriculares Linsoul kiwi ears belle',
      price: '159.990 COP',
      company: 'Aula',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71B7AZVYaLL._AC_SL1500_.jpg&f=1&nofb=1&ipt=a196308e86d513d7da3cf983548f099a0fea12e28eb183261c4ee545b9f0416c&ipo=images'
    },
    {
      id: 4,
      name: 'Monitor 27 pulgadas 144Hz',
      price: '299.990 COP',
      company: 'AOC',
      img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <>
      <Navbar user={user} onLogout={onLogout} />
      <div className="dashboard-container">
        <h2 className="page-title">Catálogo</h2>
        <div className="product-list">
          {products.map(product => (
            <article className="product-row" key={product.id}>
              <img src={product.img} alt="" className="product-img" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-company">{product.company}</p>
              </div>
              <span className="product-price">{product.price}</span>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
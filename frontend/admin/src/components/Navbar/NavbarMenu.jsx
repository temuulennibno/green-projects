import { Link } from 'react-router-dom';

function NavbarMenuItem({ item }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={item.link}>
        {item.label}
      </Link>
    </li>
  );
}

export default function NavbarMenu({ items = [], title = '', onToggle }) {
  return (
    <>
      <button className="navbar-toggler" onClick={onToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {items.map((item, index) => (
            <NavbarMenuItem item={item} key={`menu-item-${index}`} />
          ))}
        </ul>
      </div>
    </>
  );
}

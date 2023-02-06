export default function NavbarWrapper({ children }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">{children}</div>
    </nav>
  );
}

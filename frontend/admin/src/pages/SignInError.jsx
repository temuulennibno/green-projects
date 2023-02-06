import { Link } from 'react-router-dom';

export default function SignInError() {
  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="fw-bold text-uppercase">Page not found</h1>
      <div>
        <Link className="btn btn-sm btn-primary me-3" to={'/signin'}>
          Sign in
        </Link>
        <Link className="btn btn-sm btn-primary me-3" to={'/signup'}>
          Sign up
        </Link>
      </div>
    </div>
  );
}

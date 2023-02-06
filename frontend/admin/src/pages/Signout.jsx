import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signout({ setMe }) {
  const navigate = useNavigate();
  useEffect(() => {
    setMe(undefined);
    localStorage.removeItem('me');
    localStorage.removeItem('token');
    navigate('/signin');
  }, []);

  return <div className="w-100 m-vh-100 d-flex align-items-center justify-content-center"></div>;
}

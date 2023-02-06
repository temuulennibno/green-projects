import { useEffect } from 'react';
import { useState } from 'react';
import Heading from '../components/Heading';
import MenuPositionList from '../components/Menu/Positions/PositionList';
import axios from 'axios';
import DynamicModal from '../components/utils/DynamicModal';
import MenuPositionCreate from '../components/Menu/Positions/PositionCreate';

export default function MenuPositions() {
  const [show, setShow] = useState(false);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/menu-positions').then((res) => {
      setPositions(res.data);
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Menu positions" handleShow={handleShow} />
        <MenuPositionList items={positions} />
      </div>
      <DynamicModal
        show={show}
        handleClose={handleClose}
        title="Create position "
        content={
          <MenuPositionCreate
            afterSubmit={(position) => {
              setPositions([...positions, position]);
              setShow(false);
            }}
          />
        }
      />
    </>
  );
}

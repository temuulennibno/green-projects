import Modal from 'react-bootstrap/Modal';

export default function DynamicModal({ show, handleClose, title, content }) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
    </Modal>
  );
}

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const VentanaSesion = ({show, handleClose}) => {

  

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalInicio'>
          <h1>BIENVENIDOS AL MARKETPLACE </h1>
          <img className='logo' src="https://allzone.es/img/just-deal-logo-1604397301.jpg" alt="logo"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='sesionRegistro' onClick={handleClose}>
            Close
          </Button>
          <Button className='sesionRegistro' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default VentanaSesion;
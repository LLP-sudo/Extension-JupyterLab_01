import { Button, Modal} from 'react-bootstrap';
import React, { useState } from 'react';

import {Notebook, NotebookActions } from '@jupyterlab/notebook';

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  notebook: Notebook,
  ative: boolean
}

export const UserInterface: React.FC<Props> =({ative, notebook}) => {
    const [show, setShow] = useState(ative);
  
    const handleClose = () => {
      setShow(false);
      document.getElementById("Modal").remove();
    }
    const handleInsert = (notebook:Notebook) => {

      NotebookActions.insertBelow(notebook);
      const activeCell = notebook.activeCell;
      activeCell.model.value.text = "oi"
      document.getElementById("Modal").remove();

    }
    //const handleShow = () => setShow(true);

  
    return (
      <>  
        <Modal
          show={show}
         onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Função Univariada</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <label>
          Parametro 1:
          <input type="text"  />       
           </label>
           <label>    
          Parametro 2:
          <input type="text"  />       
           </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={() => handleInsert(notebook)}>Inserir</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
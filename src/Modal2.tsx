import { Button, Modal } from 'react-bootstrap';
import React, {Component } from 'react';

import { Notebook, NotebookActions } from '@jupyterlab/notebook';

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    notebook: Notebook,
}

interface PropsState {
    show: boolean,
    inputValue: string | number
}

export default class UserInterface extends Component<Props, PropsState> {
    state = {
        show: true,
        inputValue: ''
    };


    handleClose = () => {
        this.setState({show: false})
        document.getElementById("Modal").remove();
    }

    handleInsert = (notebook: Notebook) => {
        NotebookActions.insertBelow(notebook);
        const activeCell = notebook.activeCell;
        activeCell.model.value.text = this.state.inputValue
        document.getElementById("Modal").remove();
    }

    render() {
        return (
            <Modal
                show={this.state.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Função Univariada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>
                        Parametro 1:
                    <input type="text" onChange={e => this.setState({inputValue: e.target.value})}/>
                    </label>
                    <label>
                        Parametro 2:
        <input type="text" />
                    </label>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={() => this.handleInsert(this.props.notebook)}>Inserir</Button>
                </Modal.Footer>
            </Modal>

        );
    };
}
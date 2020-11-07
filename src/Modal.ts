
import {Notebook } from '@jupyterlab/notebook';
import '../style/index.css'

export default class Modal {
    modalFundo: HTMLElement;
    modalBox: HTMLElement
    modalHeader: HTMLElement
    modaltitle: HTMLElement
    modalBtn: HTMLElement
    modalInput: HTMLElement
    labelInput: HTMLElement
    modalTBox: HTMLElement
    labelTBox: HTMLElement
    valueInput: string;
    valueTBox: string;
    notebook: Notebook;
    activeCell: any

    constructor(notebook: Notebook){
        this.notebook = notebook;
        this.activeCell = this.notebook.activeCell;
    }

    creatModal() {
        //fundo opaco do modal
        this.modalFundo = document.createElement("div");
        this.modalFundo.className = "fundo"
        this.modalFundo.id = "fundo"

        //Modal Box
        this.modalBox = document.createElement("div");
        this.modalBox.className = "modal"

        //header modal 
        this.modalHeader = document.createElement("div");
        this.modalHeader.className = "modalHeader"

        //title modal header
        this.modaltitle = document.createElement("h2");
        this.modaltitle.className = "title"
        this.modaltitle.innerHTML = "Exodus"

        //label input
        this.labelInput = document.createElement("label")
        this.labelInput.innerText = "Insira a função:"
        this.labelInput.className = "label"

        //input
        this.modalInput = document.createElement("input")
        this.modalInput.className = "input"
        this.modalInput.id = "funcao"

        //label TextBox
        this.labelTBox = document.createElement("label")
        this.labelTBox.innerText = "Insira os parametros"
        this.labelTBox.className = "label"

        //TextBox
        this.modalTBox = document.createElement("textarea");
        this.modalTBox.className = "input"
        this.modalTBox.id = "param"

        //btn
        this.modalBtn = document.createElement("button")
        this.modalBtn.innerText = "Selecionar"
        this.modalBtn.className = "btn";
        this.modalBtn.onclick = this.getValue;

        //append children
        this.modalFundo.appendChild(this.modalBox)
        this.modalBox.appendChild(this.modalHeader)
        this.modalHeader.appendChild(this.modaltitle)
        this.modalBox.appendChild(this.labelInput)
        this.modalBox.appendChild(this.modalInput)
        this.modalBox.appendChild(this.labelTBox)
        this.modalBox.appendChild(this.modalTBox)
        this.modalBox.appendChild(this.modalBtn)

        //adiciona na aplicação
        document.getElementsByTagName('body')[0].appendChild(this.modalFundo);

    }



    getValue(): void {
        this.valueInput = (document.getElementById("funcao") as HTMLInputElement).value
        this.valueTBox = (document.getElementById("param") as HTMLInputElement).value
               
        
        this.activeCell.model.value.text = this.valueInput

        document.getElementById("fundo").remove()
        

    }


}
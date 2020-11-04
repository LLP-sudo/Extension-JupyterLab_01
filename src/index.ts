//Imports padrão para desenvolver nova extenssão
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

//imports para desenvolver menu

import { IMainMenu } from '@jupyterlab/mainmenu';

import { Menu } from '@lumino/widgets';

import { ICommandPalette } from '@jupyterlab/apputils';

import '../style/index.css'


//função para pegar valor das inputs
function getValue():void {
  let input: string;
  let textarea: string;
  let modal: HTMLElement;

  input = (document.getElementById("funcao") as HTMLInputElement).value
  textarea = (document.getElementById("param")as HTMLInputElement).value
  modal = document.getElementById("fundo")

  alert(input)
  alert(textarea)
  modal.remove()
  
}

// informações da extensão
const extension: JupyterFrontEndPlugin<void> = {
  id: 'Exodus',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu],
  //função executada ao cliclar na extensão
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    mainMenu: IMainMenu
  ) => {
    const { commands } = app;

    // Add a command
    const command = 'Python function';
    const command2 = 'Lysp function'



    //adiciona um comando ao clickar no menu
    commands.addCommand(command, {
      //nome subm-menu
      label: 'Funções em Python',
      caption: 'Funções em Python',
      //Comando do click
      execute: (args: any) => {    

        //fundo opaco do modal
        let div = document.createElement("div");
        div.className = "fundo"
        div.id = "fundo"

        let modal = document.createElement("div");
        modal.className = "modal"
        div.appendChild(modal)

        let modalHeader = document.createElement("div");
        modalHeader.className = "modalHeader"
        modal.appendChild(modalHeader)

        let title = document.createElement("h2");
        title.innerText = "Exodus"
        title.className = "title"
        modalHeader.appendChild(title)

        let label = document.createElement("label")
        label.innerText = "Insira a função:"
        label.className = "label"
        modal.appendChild(label)

        let input = document.createElement("input");
        input.className = "input"
        input.id = "funcao";
        modal.appendChild(input)

        let labelText = document.createElement("label")
        labelText.innerText = "Insira os parametro separados por ;"
        labelText.className = "label"
        modal.appendChild(labelText)

        let textarea = document.createElement("textarea");
        textarea.className = "input"
        textarea.id = "param";
        modal.appendChild(textarea)

        let btn =  document.createElement("button")
        btn.innerText = "Selecionar"
        btn.className = "btn";
        btn.onclick = getValue;
        modal.appendChild(btn)


       
        document.getElementsByTagName('body')[0].appendChild(div);
        //document.getElementsByTagName('body')[0].appendChild(modal);
           

      }
    });

    commands.addCommand(command2, {
      //nome subm-menu
      label: 'Funções em Lysp',
      caption: 'Funções em Lysp',
      //Comando do click
      execute: (args: any) => {
        window.alert(
          `Chamada de Input para funções Lysp`
        );
      }
    });


    // Add the command to the command palette
    const category = 'Extension Exodus';
    palette.addItem({
      command,
      category,
      args: { origin: 'from the palette' }
    });

    palette.addItem({
      command: command2,
      category,
      args: {}
    });


    // Create a menu
    const Exodus: Menu = new Menu({ commands });
    //nome menu principal
    Exodus.title.label = 'Exodus';
    mainMenu.addMenu(Exodus, { rank: 80 });

    // Add the command to the menu
    Exodus.addItem({ command, args: { origin: 'from the menu' } });
    Exodus.addItem({ command: command2, args: { origin: 'from the menu' } });

  }



};

export default extension;

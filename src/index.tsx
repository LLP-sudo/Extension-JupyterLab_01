//Imports----------------------------------------------------------------------------------// 
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IMainMenu } from '@jupyterlab/mainmenu';

import { Menu } from '@lumino/widgets';

import { ICommandPalette } from '@jupyterlab/apputils';

import { INotebookTracker } from "@jupyterlab/notebook";

import React from 'react'

import ReactDom from 'react-dom'

import {UserInterface} from './Modal'

//------------------------------------------------------------------------------------------//

//Objeto da extensão
const extension: JupyterFrontEndPlugin<void> = {
  id: 'Exodus',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu, INotebookTracker],
  activate: (                                                     //Arrow function da extensão, a execução parte dessa função.
    app: JupyterFrontEnd,                                         //objetos passados como parametros
    palette: ICommandPalette,
    mainMenu: IMainMenu,
    notebookTracker: INotebookTracker | null
  ) => {

    //Declaração de objetos 
    const { commands } = app;                                     // objetos dentro do pacote JupyterFrontEnd

    //Declaração de comandos
    const command = 'UniVariada';

    //Definição do comando 
    commands.addCommand(command, {
      label: 'UniVariada',
      caption: 'UniVariada',
      execute: (args: any) => {

        //Verificação: existe um notebook aberto?

        if(notebookTracker.currentWidget !== null) {

        const current = notebookTracker.currentWidget;
        const notebook = current.content;
       
        let modal = document.createElement("div");
          modal.id = "Modal";
          
          document.getElementsByTagName('body')[0].appendChild(modal);;
          ReactDom.render( <UserInterface ative={true} notebook={notebook} />, document.getElementById('Modal'))

        }
        else {

          window.alert("A extensão não pode ser usada se não houver um notbook aberto!");

        }

      }

    });

    
    // Adicionando comados para o palette
    const category = 'Extension Exodus';
    palette.addItem({
      command,
      category,
      args: { origin: 'from the palette' }
    });
    
    // Create a menu
    const Exodus: Menu = new Menu({ commands });
    //nome menu principal
    Exodus.title.label = 'Exodus';
    mainMenu.addMenu(Exodus, { rank: 80 });

    // Add the command to the menu
    Exodus.addItem({ command, args: { origin: 'from the menu' } });

  }

};

export default extension;

//Imports padrão para desenvolver nova extenssão
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

//imports para desenvolver menu

import { IMainMenu } from '@jupyterlab/mainmenu';

import { Menu } from '@lumino/widgets';

import { ICommandPalette } from '@jupyterlab/apputils';

import Modal from './Modal'

//import '../style/index.css'

// instancia o modal
let modal = new Modal()


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

        modal.creatModal();
      

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

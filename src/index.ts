//Imports padrão para desenvolver nova extenssão
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

//imports para desenvolver menu
import { IMainMenu } from '@jupyterlab/mainmenu';

import { Menu } from '@lumino/widgets';

import { ICommandPalette } from '@jupyterlab/apputils';

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
    const command = 'Exodus-interface';
    //adiciona um comando ao clickar no menu
    commands.addCommand(command, {
      //nome subm-menu
      label: 'Funções em Python!',
      caption: 'Funções em Python',
      //Comando do click
      execute: (args: any) => {
        window.alert(
          `Chamada de Input para funções Python`
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

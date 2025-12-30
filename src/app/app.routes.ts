
import { Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato.component';
import { ListaLivrosComponent } from './pages/lista-livros/lista-livros.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
  {
    path: 'lista-livros',
    //component: ListaLivrosComponent
    //carrega somente qdo solicitado! [lazy-loading]
    loadComponent: () => import('./pages/sobre/sobre.component')
                          .then((c) => (c.SobreComponent)) 
  },
  {
    path: 'sobre',
    //component: SobreComponent
    loadComponent:() => import('./pages/contato/contato.component')
                          .then((c) => (c.ContatoComponent))
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: '',
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ListaLivrosComponent
  }
];

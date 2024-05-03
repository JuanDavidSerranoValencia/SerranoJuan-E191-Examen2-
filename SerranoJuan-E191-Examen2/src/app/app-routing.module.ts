import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPage } from './pagina/inicio/inicio.page';

const routes: Routes = [
  {
    path: 'pagina/inicio',
    component: InicioPage
  },
  
  {
    path: '',
    redirectTo: 'pagina/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pagina/inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

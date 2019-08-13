import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'home/:index', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
//Página de detalhes tem que ter id, logo o path tem que ser "pagina tal / nome da pagina" pra poder carregar as informações melhor, mas o loadchildren continua o mesmo.
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

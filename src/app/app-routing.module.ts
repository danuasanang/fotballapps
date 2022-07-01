import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'epl'||':idLeague',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'screen',
    pathMatch: 'full'
  },
  {
    path: ':idLeague/:idTeam',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: ':idLeague/:idTeam/result',
    loadChildren: () => import('./pertandingan/pertandingan.module').then( m => m.PertandinganPageModule)
  },
  {
    path: 'ligue1'||':idLeague',
    loadChildren: () => import('./ligue1/ligue1.module').then( m => m.Ligue1PageModule)
  },
  {
    path: 'laliga'||':idLeague',
    loadChildren: () => import('./laliga/laliga.module').then( m => m.LaligaPageModule)
  },
  {
    path: 'serie-a'||':idLeague',
    loadChildren: () => import('./serie-a/serie-a.module').then( m => m.SerieAPageModule)
  },
  {
    path: 'screen',
    loadChildren: () => import('./screen/screen.module').then( m => m.ScreenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

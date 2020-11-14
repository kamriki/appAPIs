import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clipboard', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  { path: 'canvas', loadChildren: () => import('./pages/canvas/canvas.module').then( m => m.CanvasPageModule) },
  { path: 'clipboard', loadChildren: () => import('./pages/clipboard/clipboard.module').then( m => m.ClipboardPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

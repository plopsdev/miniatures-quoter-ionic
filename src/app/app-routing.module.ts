import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ScaleAddComponent } from './scale-add/scale-add.component';
import { ScaleEditComponent } from './scale-edit/scale-edit.component';
import { ScalesManagerComponent } from './scales-manager/scales-manager.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'scales-manager',
    component: ScalesManagerComponent
  },
  {
    path: 'scales-manager/add',
    component: ScaleAddComponent
  },
  {
    path: 'scales-manager/edit/:id',
    component: ScaleEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

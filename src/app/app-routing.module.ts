// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/security/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'peoples',
    loadChildren: () => import('./modules/register/peoples/peoples.module').then(m => m.PeoplesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

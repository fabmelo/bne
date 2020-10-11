// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// guards
import { AuthGuard } from './core/guards/auth.guard';

// layout
import { LayoutDefaultComponent } from './layout/components/layout-default/layout-default.component';
import { LayoutAuthComponent } from './layout/components/layout-auth/layout-auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./modules/security/views/auth/auth.module').then(m => m.AuthModule)
      },
    ],
  },
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: 'peoples',
        loadChildren: () => import('./modules/register/views/peoples/peoples.module').then(m => m.PeoplesModule),
        canActivate: [AuthGuard]
      },
    ],
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./modules/security/views/auth/auth.module').then(m => m.AuthModule)
  // },
  // {
  //   path: 'peoples',
  //   loadChildren: () => import('./modules/register/views/peoples/peoples.module').then(m => m.PeoplesModule),
  //   canActivate: [AuthGuard],
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

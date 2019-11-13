import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '' , loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
,
  {
      path: '**',
      redirectTo: 'notfound'
  }
];


export const routing = RouterModule.forRoot(APP_ROUTES);

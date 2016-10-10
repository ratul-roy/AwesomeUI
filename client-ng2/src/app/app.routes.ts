import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  {
    path: 'detail', loadChildren: () => System.import('./detail')
  },
  { path: '**',    component: Home },
];

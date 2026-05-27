import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/home/products/products';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'products',
        component: Products
    },
];

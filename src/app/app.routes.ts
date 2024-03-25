import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { authLoginGuard } from './guards/auth-login.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component'),
        canActivate: [authLoginGuard]
    },
    {
        path: 'products',
        loadComponent:   () => import('./features/products/products.component'),
        canActivate: [authGuard]
    },
    {
        path: 'product-details/:id',
        loadComponent:   () => import('./features/products/details/details.component')
    },
    {
        path: 'checkout',
        loadComponent:   () => import('./features/checkout/checkout.component'),

    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

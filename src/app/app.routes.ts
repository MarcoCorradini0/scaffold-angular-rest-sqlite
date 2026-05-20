import { Routes } from '@angular/router';
import { Mercatini } from './pages/mercatini/mercatini';
import { MercatinoDetail } from './pages/mercatino-detail/mercatino-detail';

export const routes: Routes = [
    { path:'', component: Mercatini },
    { path:'mercatini/:id', component: MercatinoDetail }
];

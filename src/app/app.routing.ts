import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import {HomeComponent} from './pages/home/home.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

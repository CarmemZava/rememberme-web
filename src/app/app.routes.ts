import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/pages/register/register.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { DashboardLayoutComponent } from './dashboard/layout/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
    {
        path: "register",
        component: RegisterComponent
    },

    {
        path:"login",
        component: LoginComponent
    },

    {
        path:"dashboard",
        component: DashboardLayoutComponent
    }
];

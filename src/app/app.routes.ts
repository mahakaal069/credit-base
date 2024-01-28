import { Routes } from '@angular/router';
import { MaterialComponent } from './test/material-components/material.component';
import { SignupComponent } from './test/firebase/components/signup.component';

export const routes: Routes = [
    {
        path: 'material',
        component: MaterialComponent
    },
    {
        path: 'firebase',
        component: SignupComponent
    }
];
